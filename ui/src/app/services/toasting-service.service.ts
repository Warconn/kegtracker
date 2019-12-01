import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToastingServiceService {

  constructor( private _snackBar: MatSnackBar) { }

  toastCRUD(ret: Object, successString = "Success!", useException = false, failString = "Failure...", actionTitle = ""){
    var toastMessage = "";
    var retObj;
    retObj = ret; 

    if(retObj.status = "200"){
      toastMessage = successString;
    }
    else{
      useException ? toastMessage = retObj.message: toastMessage = failString;
    }

    return this._snackBar.open(toastMessage, actionTitle, {
      duration: 2000,
    }); 
  }

  toastMessage(toastMessage = "", actionTitle = ""){
    return this._snackBar.open(toastMessage, actionTitle, {
      duration: 2000,
    }); 
  }

}
