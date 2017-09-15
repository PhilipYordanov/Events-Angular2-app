"use strict";
var _404_component_1 = require("./errors/404.component");
var create_event_component_1 = require("./events/create-event.component");
var events_list_component_1 = require("./events/events-list.component");
var events_list_resolver_service_1 = require("./events/events-list-resolver.service");
var index_1 = require("./events/index");
exports.appRoutes = [
    { path: 'events/new', component: create_event_component_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: events_list_component_1.EventsComponent, resolve: { events: events_list_resolver_service_1.EventListResolver } },
    { path: 'events/:id', component: index_1.EventDetailsComponent, canActivate: [index_1.EventRouteService] },
    { path: 'events/session/new', component: index_1.CreateSessionComponent },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map