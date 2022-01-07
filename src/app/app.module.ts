import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PresentacionComponent } from './views/home/presentacion/presentacion.component';
import { ResumenComponent } from './views/home/resumen/resumen.component';
import { PieComponent } from './pie/pie.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { HomeComponent } from './views/home/home.component';
import { ListaproyectosComponent } from './views/listaproyectos/listaproyectos.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { ResumenproyectoComponent } from './views/listaproyectos/resumenproyecto/resumenproyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PresentacionComponent,
    ResumenComponent,
    PieComponent,
    ContactoComponent,
    HomeComponent,
    ListaproyectosComponent,
    PaginaNoEncontradaComponent,
    ResumenproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
