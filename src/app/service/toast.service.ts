import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
  remainingDuration: number;
  timerId?: any;
  startTime?: number;
  paused?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts = signal<Toast[]>([]);
  private nextId = 0;

  get toastsList() {
    return this.toasts.asReadonly();
  }

  show(message: string, type: 'success' | 'error' | 'info' = 'info', duration: number = 3000) {
    const id = this.nextId++;
    const toast: Toast = { 
      id, 
      message, 
      type, 
      duration, 
      remainingDuration: duration,
      paused: false 
    };
    
    this.toasts.update(current => [...current, toast]);

    if (duration > 0) {
      this.startTimer(id);
    }
  }

  private startTimer(id: number) {
    const toast = this.toasts().find(t => t.id === id);
    if (!toast || toast.duration <= 0) return;

    const timerId = setTimeout(() => this.remove(id), toast.remainingDuration);
    
    this.toasts.update(current => 
      current.map(t => t.id === id ? { ...t, timerId, startTime: Date.now(), paused: false } : t)
    );
  }

  pauseToast(id: number) {
    const toast = this.toasts().find(t => t.id === id);
    if (!toast || !toast.timerId || toast.paused) return;

    clearTimeout(toast.timerId);
    
    const elapsed = Date.now() - (toast.startTime || 0);
    const remaining = Math.max(0, toast.remainingDuration - elapsed);

    this.toasts.update(current => 
      current.map(t => t.id === id ? { ...t, remainingDuration: remaining, timerId: undefined, paused: true } : t)
    );
  }

  resumeToast(id: number) {
    const toast = this.toasts().find(t => t.id === id);
    if (!toast || !toast.paused) return;

    this.startTimer(id);
  }

  showSuccess(message: string, duration?: number) {
    this.show(message, 'success', duration);
  }

  showError(message: string, duration?: number) {
    this.show(message, 'error', duration);
  }

  showInfo(message: string, duration?: number) {
    this.show(message, 'info', duration);
  }

  remove(id: number) {
    const toast = this.toasts().find(t => t.id === id);
    if (toast?.timerId) clearTimeout(toast.timerId);
    
    this.toasts.update(current => current.filter(t => t.id !== id));
  }
}
