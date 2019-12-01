import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToastingServiceService {

  constructor( private _snackBar: MatSnackBar) { }

  toast(ret: Object, successString = "Success!", failString = "Failure...", useException = false){
    var toastMessage = "";
    var retObj;
    retObj = ret; 

    if(retObj.status = "200"){
      toastMessage = successString;
    }
    else{
      useException ? toastMessage = retObj.message: toastMessage = failString;
    }

    this._snackBar.open(toastMessage, "", {
      duration: 2000,
    }); 
  }
}
