import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCategoryComponent } from './components/category/agregar-category/agregar-category.component';
import { CategoryComponent } from './components/category/category/category.component';
import { EditarCategoryComponent } from './components/category/editar-category/editar-category.component';
import { ListaCategoryComponent } from './components/category/lista-category/lista-category.component';
import { AgregarClienteComponent } from './components/cliente/agregar-cliente/agregar-cliente.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { ListaClienteComponent } from './components/cliente/lista-cliente/lista-cliente.component';
import { AgregarCostumeComponent } from './components/costume/agregar-costume/agregar-costume.component';
import { CostumeComponent } from './components/costume/costume/costume.component';
import { EditarCostumeComponent } from './components/costume/editar-costume/editar-costume.component';
import { ListaCostumeComponent } from './components/costume/lista-costume/lista-costume.component';
import { AgregarMessageComponent } from './components/message/agregar-message/agregar-message.component';
import { EditarMessageComponent } from './components/message/editar-message/editar-message.component';
import { ListaMesageComponent } from './components/message/lista-mesage/lista-mesage.component';
import { MessageComponent } from './components/message/message/message.component';
import { PageInitComponent } from './components/page-init/page-init.component';
import { AgregarReservationComponent } from './components/reservation/agregar-reservation/agregar-reservation.component';
import { EditarReservationComponent } from './components/reservation/editar-reservation/editar-reservation.component';
import { ListaReservationComponent } from './components/reservation/lista-reservation/lista-reservation.component';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';

const routes: Routes = [

  {path:'',component:PageInitComponent  },
  //path category
  {path:'category',component:ListaCategoryComponent  },
  {path:'category/detalle/:id',component:CategoryComponent},
  {path:'category/create',component:AgregarCategoryComponent },
  {path:'category/update/:id',component:EditarCategoryComponent  },
  //path costume
  {path:'costume',component:ListaCostumeComponent },
  {path:'costume/detalle/:id',component:CostumeComponent},
  {path:'costume/create',component:AgregarCostumeComponent },
  {path:'costume/update/:id',component:EditarCostumeComponent  },
  //path client
  {path:'client',component:ListaClienteComponent },
  {path:'client/detalle/:id',component:ClienteComponent},
  {path:'client/create',component:AgregarClienteComponent },
  {path:'client/update/:id',component:EditarClienteComponent  },
  //path message
  {path:'message',component:ListaMesageComponent },
  {path:'message/detalle/:id',component:MessageComponent},
  {path:'message/create',component:AgregarMessageComponent },
  {path:'message/update/:id',component:EditarMessageComponent  },
  //path reservation
  {path:'reservation',component:ListaReservationComponent },
  {path:'reservation/detalle/:id',component:ReservationComponent},
  {path:'reservation/create',component:AgregarReservationComponent },
  {path:'reservation/update/:id',component:EditarReservationComponent},
 
 // { path:'**',redirectTo:'',pathMatch:'full' }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
