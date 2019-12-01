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


  saveKeg(keg: Keg) {
    var returnObject; 
    this.kegService.editKeg(keg)
      .subscribe(ret => {
        returnObject = ret;
        var toastMessage = "";

        if(returnObject.status = "200"){
          toastMessage = "Successfully Saved";
        }
        else{
          toastMessage = returnObject.message;
        }

        this._snackBar.open(toastMessage, "", {
          duration: 2000,
        });   

    })
  }

  createNewKeg(keg: Keg){
    var returnObject; 
    //assuming you are creating a full keg, copying capacity to volume
    keg.currentvolume = keg.kegcapacity;

    this.kegService.createKeg(keg)
      .subscribe(ret => {
        returnObject = ret;
        var toastMessage = "";

        if(returnObject.status = "200"){
          toastMessage = "Successfully Created";
        }
        else{
          toastMessage = returnObject.message;
        }

        this._snackBar.open(toastMessage, "", {
          duration: 2000,
      });   
    }) 
  }

}