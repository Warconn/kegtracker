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
    if(keg.currentvolume > 1 || override){  //current volume is greater than 1
      console.log("Current Volume: " + keg.currentvolume);
      console.log(keg.beer[0].beername +" poured " + ounces + "ounces");

      keg.currentvolume = keg.currentvolume - ounces;
      console.log("New Volume: " + keg.currentvolume);
      
      var returnObject;
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
    else{
      var snackBarRet = this._snackBar.open("This keg is already empty or below expected volume", "Still Pour?", {
        duration: 2000,
      });    

      snackBarRet.onAction().subscribe(() => {
        this.pourBeer(keg, ounces, true);
      });
    }
  }  
}


