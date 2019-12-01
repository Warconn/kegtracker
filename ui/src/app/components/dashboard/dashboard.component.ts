import { Component, OnInit } from '@angular/core';
import {KegtrackingService} from '@app/services/kegtracking.service';
import Keg from '@app/models/keg.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastingServiceService } from '@app/services/toasting-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private kegService: KegtrackingService,
    private _snackBar: MatSnackBar,
    private toastService: ToastingServiceService
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

      this.kegService.editKeg(keg)
        .subscribe(ret => {
          this.toastService.toastCRUD(ret, ounces + "oz have been poured from " + keg.beer[0].beername);
        })
    }
    else{ //If there is not enough volume estimated left in the keg,
          //but we poured it already, allow for the estimation to be 
          //overridden and logged. 
      var snackBarRet = this.toastService.toastMessage("This keg is already empty or below expected volume", "Still Pour?");    

      snackBarRet.onAction().subscribe(() => {
        this.pourBeer(keg, ounces, true);
      });
    }
  }  
}


