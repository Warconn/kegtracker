import { Component, OnInit } from '@angular/core';
import {KegtrackingService} from '@app/services/kegtracking.service';
import Keg from '@app/models/keg.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private kegService: KegtrackingService,
    private _snackBar: MatSnackBar
  ) { }

  public newKeg: Keg = new Keg()
  kegList: Keg[];

  ngOnInit(): void {
    this.kegService.getKegs()
      .subscribe(kegs => {
        this.kegList = kegs
        console.log(kegs)
      })
  }

  pourBeer(keg: Keg, ounces: number, override = false) {
    //Double check the current volume is greater than what is attempting to be poured
    if(keg.currentvolume > ounces || override){ 

      //subtract them
      keg.currentvolume = keg.currentvolume - ounces;
      
      var returnObject; //needed to capture the return object of the PUT
      this.kegService.editKeg(keg)
        .subscribe(ret => {
          returnObject = ret;
          var toastMessage = "";

          //Need to convert success into new volume
          if(returnObject.status = "200"){
            toastMessage = ounces + "oz have been poured from " + keg.beer[0].beername;
          }
          else{
            toastMessage = returnObject.message;
          }

          this._snackBar.open(toastMessage, "", {
            duration: 2000,
          });         
        })
    }
    else{ //If there is not enough volume estimated left in the keg,
          //but we poured it already, allow for the estimation to be 
          //overridden and logged. 
      var snackBarRet = this._snackBar.open("This keg is already empty or below expected volume", "Still Pour?", {
        duration: 2000,
      });    

      snackBarRet.onAction().subscribe(() => {
        this.pourBeer(keg, ounces, true);
      });
    }
  }  
}


