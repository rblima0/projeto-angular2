import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';

//NgModule transforma a classe em um modulo do Angular
@NgModule({
    imports: [ BrowserModule, FotoModule ], //importa BrowserModule pois ele roda no navegador
    declarations: [ AppComponent ], //oque o modulo declara o que faz parte dele
    bootstrap: [ AppComponent ] //Com qual component eu quero iniciar
})
export class AppModule {

}