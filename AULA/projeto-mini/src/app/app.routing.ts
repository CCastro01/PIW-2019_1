import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes = [
   //caso não digite nada, leve para user
   { path: '', pathMatch: 'full', redirectTo: 'user' },
    //importando as rotas-filho
    {path:'user',loadChildren:'./user/user.module#UserModule'},
    {path:'product',loadChildren:'./product/product.module#ProductModule'},
    //path errado, leva para user. DEIXAR ESSE PATH SEMPRE POR ÚLTIMO.
    {path: '**', redirectTo: 'user'}
  ];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);