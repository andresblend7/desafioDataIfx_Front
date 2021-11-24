import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  saveOnStorage(key:string, value: string) {
    localStorage.setItem(key, value);
  }

  getAllRequests() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i]) || '{}'));
    }


    return values;
  }
}
