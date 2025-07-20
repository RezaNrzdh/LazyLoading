import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {MainComponent} from "./layout/main.component";

export const routes: Routes = [
    {
        path: "",
        component: MainComponent,
        children: [
            {
                path: "",
                loadComponent: (): Promise<typeof HomeComponent> => import("./components/home/home.component").then(c => c.HomeComponent)
            },
            {
                path: "about",
                data: { preload: true },
                loadComponent: (): Promise<typeof AboutComponent> => import("./components/about/about.component").then(c => c.AboutComponent)
            },
            {
                path: "contact",
                loadComponent: (): Promise<typeof  ContactComponent> => import("./components/contact/contact.component").then(c => c.ContactComponent)
            }
        ]
    }
];
