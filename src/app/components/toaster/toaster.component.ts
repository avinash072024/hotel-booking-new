import { Component, inject } from '@angular/core';
import { ToastService } from '../../service/toast.service';
import { animate, style, transition, trigger, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-toaster',
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-20px) scale(0.9)', opacity: 0 }),
        animate('400ms cubic-bezier(0.23, 1, 0.32, 1)', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class ToasterComponent {
  toastService = inject(ToastService);
}
