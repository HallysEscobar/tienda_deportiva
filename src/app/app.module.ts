import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { VistaModule } from './vista/vista.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgApexchartsModule } from "ng-apexcharts";
// import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { AppComponent } from './app.component';
import { LoginComponent } from './formularios-principales/login/login.component';
import { OlvidoContrasenaComponent } from './formularios-principales/olvido-contrasena/olvido-contrasena.component';
import { CambiarContrasenaComponent } from './formularios-principales/cambiar-contrasena/cambiar-contrasena.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OlvidoContrasenaComponent,
    CambiarContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    VistaModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgApexchartsModule,
    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    // NgApexchartsModule,
    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
