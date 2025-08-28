import { Routes } from '@angular/router';
import { Perfil } from './pages/perfil/perfil';
import { Registro } from './pages/registro/registro';


export const routes: Routes = [
    {
        path:"perfil",
        component:Perfil
    },
    {
        path:"registro",
        component:Registro
    },
    {
        path:"",
        redirectTo:"registro",
        pathMatch:"full"
    }
];
