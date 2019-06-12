import { GuardService } from './../services/guard.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

const routes:Routes = [
    {path:'list',component:ListProductComponent, canActivate: [GuardService]},
    {path:'register',component:RegisterProductComponent, canActivate: [GuardService]},
    {path:'edit/:id',component:EditProductComponent, canActivate: [GuardService]},
    
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);