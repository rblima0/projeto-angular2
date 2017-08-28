import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';

import 'rxjs/add/operator/map';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//NgModule transforma a classe em um modulo do Angular
@NgModule({
    imports: [ BrowserModule, FotoModule, HttpModule, PainelModule, routing, FormsModule, ReactiveFormsModule ], //importa BrowserModule pois ele roda no navegador
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ], //oque o modulo declara o que faz parte dele
    bootstrap: [ AppComponent ] //Com qual component eu quero iniciar
})
export class AppModule {

}