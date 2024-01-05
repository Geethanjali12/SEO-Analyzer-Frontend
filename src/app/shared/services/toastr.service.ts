import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  private toastContainerId = 'toast-container';

  /**
   * Creates toast
   * @param message 
   * @param type 
   * @returns toast 
   */
  private createToast(message: string, type: 'success' | 'danger' | 'warning'): HTMLDivElement {    
    const toast = document.createElement('div');
    toast.className = `flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`;
  
    switch (type) {
      case 'success':
        toast.classList.add('bg-green-200', 'text-green-800');
        break;
      case 'danger':
        toast.classList.add('bg-red-200', 'text-red-800');
        break;
      case 'warning':
        toast.classList.add('bg-yellow-200', 'text-yellow-800');
        break;
      default:
        toast.classList.add('bg-gray-200', 'text-gray-800');
        break;
    }
  
    toast.innerHTML = message;
  
    // Append the toast to the container
    const container = document.getElementById(this.toastContainerId);
    if (container) {
      container.appendChild(toast);
    }
  
    // Set timeout to remove the toast after a certain duration
    setTimeout(() => {
      toast.remove();
    }, 2000); // Adjust the duration as needed
  
    return toast;
  }

  /**
   * Success toastr service
   * @param message 
   */
  success(message: string): void {
    this.createToast(message, 'success');
  }
  
  /**
   * Dangers toastr service
   * @param message 
   */
  danger(message: string): void {
    this.createToast(message, 'danger');
  }
  
  /**
   * Warning toastr service
   * @param message 
   */
  warning(message: string): void {
    this.createToast(message, 'warning');
  }

}
