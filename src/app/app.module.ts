import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//EXTERNAS
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule}from'@angular/common/http';
import {FormsModule}from'@angular/forms';

//PROPIAS

import { AdminComponent } from 'src/app/components/admin/admin/admin.component';
import { CategoryComponent } from 'src/app/components/category/category/category.component';
import { CostumeComponent } from 'src/app/components/costume/costume/costume.component';
import { MessageComponent } from 'src/app/components/message/message/message.component';
import { ReservationComponent } from 'src/app/components/reservation/reservation/reservation.component';
import { ScoreComponent } from 'src/app/components/score/score/score.component';
import { EditarCategoryComponent } from 'src/app/components/category/editar-category/editar-category.component';
import { ListaCategoryComponent } from 'src/app/components/category/lista-category/lista-category.component';
import { AgregarCategoryComponent } from 'src/app/components/category/agregar-category/agregar-category.component';
import { EditarAdminComponent } from 'src/app/components/admin/editar-admin/editar-admin.component';
import { ListaAdminComponent } from 'src/app/components/admin/lista-admin/lista-admin.component';
import { AgregarAdminComponent } from 'src/app/components/admin/agregar-admin/agregar-admin.component';
import { EditarCostumeComponent } from 'src/app/components/costume/editar-costume/editar-costume.component';
import { ListaCostumeComponent } from 'src/app/components/costume/lista-costume/lista-costume.component';
import { AgregarCostumeComponent } from 'src/app/components/costume/agregar-costume/agregar-costume.component';
import { ClienteComponent } from 'src/app/components/cliente/cliente/cliente.component';
import { EditarClienteComponent } from 'src/app/components/cliente/editar-cliente/editar-cliente.component';
import { ListaClienteComponent } from 'src/app/components/cliente/lista-cliente/lista-cliente.component';
import { AgregarClienteComponent } from 'src/app/components/cliente/agregar-cliente/agregar-cliente.component';
import { EditarMessageComponent } from 'src/app/components/message/editar-message/editar-message.component';
import { ListaMesageComponent } from 'src/app/components/message/lista-mesage/lista-mesage.component';
import { AgregarMessageComponent } from 'src/app/components/message/agregar-message/agregar-message.component';
import { EditarReservationComponent } from 'src/app/components/reservation/editar-reservation/editar-reservation.component';
import { ListaReservationComponent } from 'src/app/components/reservation/lista-reservation/lista-reservation.component';
import { AgregarReservationComponent } from 'src/app/components/reservation/agregar-reservation/agregar-reservation.component';
import { EditarScoreComponent } from 'src/app/components/score/editar-score/editar-score.component';
import { ListaScoreComponent } from 'src/app/components/score/lista-score/lista-score.component';
import { AgregarScoreComponent } from 'src/app/components/score/agregar-score/agregar-score.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { PageInitComponent } from 'src/app/components/page-init/page-init.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoryComponent,
    CostumeComponent,
    MessageComponent,
    ReservationComponent,
    ScoreComponent,
    EditarCategoryComponent,
    ListaCategoryComponent,
    AgregarCategoryComponent,
    EditarAdminComponent,
    ListaAdminComponent,
    AgregarAdminComponent,
    EditarCostumeComponent,
    ListaCostumeComponent,
    AgregarCostumeComponent,
    ClienteComponent,
    EditarClienteComponent,
    ListaClienteComponent,
    AgregarClienteComponent,
    EditarMessageComponent,
    ListaMesageComponent,
    AgregarMessageComponent,
    EditarReservationComponent,
    ListaReservationComponent,
    AgregarReservationComponent,
    EditarScoreComponent,
    ListaScoreComponent,
    AgregarScoreComponent,
    NavComponent,
    PageInitComponent

   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    HttpClientModule,
    FormsModule
    
    
  ],
  exports:[
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
