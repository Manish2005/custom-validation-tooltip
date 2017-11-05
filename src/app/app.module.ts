import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { UtilService } from './util.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [AppComponent, ValidationMessageComponent],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
