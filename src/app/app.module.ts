import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CargarImagenService } from './service/cargar-imagen.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RemoveLocalPipe } from './pipe/remove-local.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    RemoveLocalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CargarImagenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
