import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  toggleModal(): void {
    const modal = document.getElementById('popup-modal');
    if (modal) {
      modal.classList.toggle('hidden');
    }
  }

  hideModal(): void {
    const modal = document.getElementById('popup-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }
}
