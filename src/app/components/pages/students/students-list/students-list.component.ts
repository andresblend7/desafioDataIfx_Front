import { StorageService } from './../../../../shared/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Character } from 'src/app/shared/models/character';
import { DataProviderService } from 'src/app/shared/services/data-provider.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {
  //Observables y arrauys data | filtros
  characters!: Character[];
  characters$!: Observable<Character[]>;
  closeResult: String = '';

  validateForm: boolean = true;
  successRequest: boolean = false;

  solicitudFrm = new FormGroup({
    house: new FormControl('', [Validators.required]),
    names: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
    ]),
    lastNames: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.max(100),
      Validators.min(1),
    ]),
    patronus: new FormControl(''),
  });

  constructor(
    private _dataSv: DataProviderService,
    private modalService: NgbModal,
    private _storageSv:StorageService
  ) {
    this.characters$ = this._dataSv.getStudents();

    this.characters$.subscribe((data: Character[]) => {
      this.characters = data;
      console.log(data);
    });
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed xxx`;
        }
      );
  }

  makeRequest() {
    this.validateForm = this.solicitudFrm.valid;
    if(this.solicitudFrm.valid){
      this._storageSv.saveOnStorage(''+this.getTime(), JSON.stringify(this.solicitudFrm.value));
      this.successRequest=true;
      setTimeout(() => {
        this.modalService.dismissAll();
      }, 2500);
    }



  }
  //funcion para obtener milisegundos acutales
  getTime() {
    return new Date().getTime();
  }

  isValidField(field: string) {
    this.solicitudFrm.get(field)?.valid;
    return !this.solicitudFrm.get(field)?.valid &&
      this.solicitudFrm.get(field)?.touched
      ? 'is-invalid'
      : this.solicitudFrm.get(field)?.touched
      ? 'is-valid'
      : '';
  }

  ngOnInit(): void {}
}
