import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; // Importa el archivo de rutas
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent, // Componente principal
    HomeComponent, // Página Home
    AboutComponent, // Página About
    ContactComponent // Página Contact
  ],
  imports: [
    BrowserModule, // Necesario para apps web
    AppRoutingModule // Importa las rutas definidas
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente raíz
})
export class AppModule { }
