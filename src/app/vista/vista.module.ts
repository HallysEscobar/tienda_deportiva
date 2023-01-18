import { MaterialModule } from './../material/material.module';
import { VistaRoutingModule } from './vista-routing.module';
import { VistaComponent } from './vista.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    VistaComponent,
    // InicioGeneralComponent,
    // NavbarComponent,
    // SidebarComponent,
  ],
  imports: [
    CommonModule,
    VistaRoutingModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // NgApexchartsModule,
    // WebcamModule,
    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
  ],
  exports: [
    // DataTablesModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class VistaModule { }
