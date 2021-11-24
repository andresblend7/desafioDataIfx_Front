import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input () characters!: Character[];
  @Input () characters$!: Observable<Character[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
