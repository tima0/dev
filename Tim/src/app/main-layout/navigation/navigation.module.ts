import { MDBBootstrapModule } from './../../typescripts/free/index';
import { MDBBootstrapModulePro } from './../../typescripts/pro/index';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MDBBootstrapModule,
    MDBBootstrapModulePro
  ],
  declarations: [
    NavigationComponent,
    NavbarComponent,
  ],
  exports: [
    NavigationComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: []
})
export class NavigationModule {

}
