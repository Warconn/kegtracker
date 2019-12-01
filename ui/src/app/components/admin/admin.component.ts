import { Component, OnInit } from '@angular/core';
import { KegtrackingService } from '@app/services/kegtracking.service';
import Keg from '@app/models/keg.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private kegService: KegtrackingService,
    private _snackBar: MatSnackBar

  ) { }
  kegList: Keg[];
  newKeg:Keg = new Keg();

  ngOnInit(): void {
    this.kegService.getKegs()
      .subscribe(kegs => {
        this.kegList = kegs
        console.log(kegs)
    })
  }

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

  saveKeg(keg: Keg) {
    this.kegService.editKeg(keg)
      .subscribe(ret => {
        this.toast(ret, "Successfully saved keg!", "", true);
    })
  }

  createNewKeg(keg: Keg){
    //assuming you are creating a full keg, copying capacity to volume
    keg.currentvolume = keg.kegcapacity;

    this.kegService.createKeg(keg)
      .subscribe(ret => {
       this.toast(ret, "Successfully created keg", "",true);
    }) 
  }

}