import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Constants } from './models/constants';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { OffersComponent } from './pages/offers/offers.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BookingFormComponent } from './pages/booking-form/booking-form.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';

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
        path: 'support', component: SupportComponent, title: `Support | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'about', component: AboutComponent, title: `About Us | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'contact-us', component: ContactUsComponent, title: `Contact Us | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'help-center', component: HelpCenterComponent, title: `Help Center | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'privacy-policy', component: PrivacyPolicyComponent, title: `Privacy Policy | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'terms-of-use', component: TermsOfUseComponent, title: `Terms of Use | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'our-menu', component: MenuComponent, title: `Our Menu | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'booking', component: BookingFormComponent, title: `Booking | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'my-booking', component: MyBookingsComponent, title: `My Booking | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'my-profile', component: MyProfileComponent, title: `My Profile | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'login', component: LoginComponent, title: `Login | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent, title: `Forgot Password | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: 'register', component: RegisterComponent, title: `Register | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    },
    {
        path: '**', component: NotFoundComponent, title: `404 - Page Not Found | ${Constants.APP_NAME_STR1} ${Constants.APP_NAME_STR2}`
    }
];
