import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    //tipando
    fotos: FotoComponent[] = [];
    //fotos: Array<Object> = [];
    //fotos: Object[] = [];

    constructor(service: FotoService){
        service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }
} 