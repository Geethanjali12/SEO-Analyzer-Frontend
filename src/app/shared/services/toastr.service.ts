import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  private toastContainerId = 'toast-container';

  private createToast( message: string): HTMLDivElement {
    const toast = document.createElement('div');
    toast.className = `flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`;
    toast.innerHTML = `
      <!-- Your toast content here -->
    `;

    // Append the toast to the container
    const container = document.getElementById(this.toastContainerId);
    if (container) {
      container.appendChild(toast);
    }

    // Set timeout to remove the toast after a certain duration
    setTimeout(() => {
      toast.remove();
    }, 5000); // Adjust the duration as needed

    return toast;
  }

  success(message: string): void {
    const toast = this.createToast(message);    
    // Customize the success toast if needed
  }

  danger(message: string): void {
    const toast = this.createToast(message);
    console.log('danger', toast, message);

    // Customize the danger toast if needed
  }

  warning(message: string): void {
    const toast = this.createToast(message);
    // Customize the warning toast if needed
  }

}
