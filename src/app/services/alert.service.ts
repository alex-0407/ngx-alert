import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class AlertService {

  constructor() { }

  public swal(args = {}) {
    return swal(args);
  }

  public alert(options?: any) {
    const baseOptions = {
      type: 'info'
    };
    return this.swal((<any>Object).assign(baseOptions, options));
  }

  public prompt(options: any) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Submit',
      input: 'text'
    };
    return this.swal((<any>Object).assign({}, baseOptions, options));
  }

  public confirm(options: any) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      type: 'warning'
    };
    return this.swal((<any>Object).assign(baseOptions, options));
  }

  public question(options: any) {
    const baseOptions = {
      title: 'The Internet?',
      text: 'That thing is still around?',
      type: 'question'
    };
    return this.alert((<any>Object).assign(baseOptions, options));
  }

  public success(options: any) {
    return this.alert((<any>Object).assign({type: 'success'}, options));
  }

  public error(options: any) {
    return this.alert((<any>Object).assign({type: 'error'}, options));
  }

  public warning(options: any) {
    return this.alert((<any>Object).assign({type: 'warning'}, options));
  }

  public info(options: any) {
    return this.alert((<any>Object).assign({type: 'info'}, options));
  }
}
