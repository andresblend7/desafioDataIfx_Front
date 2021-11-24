import { Character } from './../../../../shared/models/character';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataProviderService } from 'src/app/shared/services/data-provider.service';
import { FormControl } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  //Casa a buscar
  house: string = 'Gryffindor';

  //Observables y arrauys data | filtros
  characters!: Character[];
  characters$!: Observable<Character[]>;
  filter = new FormControl('');

  // Lógica de datos a renderizar
  isCharacter: boolean = true;
  tittle: string = 'Listado de personajes';

  constructor(
    private _dataSv: DataProviderService,
    private _ativatedroute: ActivatedRoute
  ) {
    this._ativatedroute.params.subscribe((params) => {
      this.isCharacter = params['isCharacter']==="true";
      console.log(this.isCharacter);
      this.initData();
    });
  }

  ngOnInit(): void {
    //Subcripción del filtro
    this.filter.valueChanges.subscribe((val) => {
      this.characters$ = of(this.search(val));
    });
  }

  initData(): void {

    if (this.isCharacter) {
      this.characters$ = this._dataSv.getCharacters(this.house);
      this.tittle = 'Listado de personajes';
    } else {
      this.characters$ = this._dataSv.getTeachers();
      this.tittle = 'Listado de profesores';
    }

    this.characters$.subscribe((data: Character[]) => {
      this.characters = data;
      console.log(data);
    });
  }

  search(text: string): Character[] {
    return this.characters.filter((char) => {
      const term = text.toLowerCase();
      return (
        char.name.toLowerCase().includes(term) ||
        char.patronus.toLowerCase().includes(term)
      );
    });
  }
  GetCharacters() {
    this.characters$ = this._dataSv.getCharacters(this.house);
    this.initData();
  }
}
