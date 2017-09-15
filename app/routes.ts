import { Routes } from '@angular/router';



import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventsComponent } from './events/events-list.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventDetailsComponent, EventRouteService, CreateSessionComponent } from './events/index';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteService] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]