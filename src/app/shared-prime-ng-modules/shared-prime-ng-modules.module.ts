import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule
  ],
  exports: [
    SidebarModule,
    ButtonModule
  ]
})
export class SharedPrimeNgModulesModule { }
