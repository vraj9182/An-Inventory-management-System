import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Forms Module } from '@angular/forms';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
@NgModule({
declarations: [
AppComponent,
InventoryComponent
})
imports: [
BrowserModule,
FormsModule
providers: [],
bootstrap: [AppComponent]
export class AppModule {}