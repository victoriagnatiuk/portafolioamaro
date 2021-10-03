import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './views/contacto/contacto.component';
import { HomeComponent } from './views/home/home.component';
import { ListaproyectosComponent } from './views/listaproyectos/listaproyectos.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes =[
  {path: 'home', component: HomeComponent},
  {path: 'listaproyectos', component: ListaproyectosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
