import { StorageService } from './../../../shared/services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  requests!: (object | null)[];

  constructor(private _storageSv : StorageService) { }

  ngOnInit(): void {
    this.requests= this._storageSv.getAllRequests();
    console.log(this.requests);
  }

}
