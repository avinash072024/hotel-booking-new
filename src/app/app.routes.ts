import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Constants } from './models/constants';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { OffersComponent } from './pages/offers/offers.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent, title: `Home | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'rooms', component: RoomsComponent, title: `Rooms | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'room-details/:id', component: RoomDetailsComponent, title: `Room Details | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'destinations', component: DestinationsComponent, title: `Destinations | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'offers', component: OffersComponent, title: `Offers & Packages | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: '**', component: NotFoundComponent, title: `404 - Page Not Found | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    }
];
