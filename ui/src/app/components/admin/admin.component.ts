import { Component, OnInit } from '@angular/core';
import { KegtrackingService } from '@app/services/kegtracking.service';
import Keg from '@app/models/keg.model';
import { MatSnackBar } from '@angular/material';
import { ToastingServiceService } from '@app/services/toasting-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private kegService: KegtrackingService,
    private toastService: ToastingServiceService
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
    this.kegService.editKeg(keg)
      .subscribe(ret => {
        this.toastService.toastCRUD(ret, "Successfully saved keg!", true);
    })
  }

  createNewKeg(keg: Keg){
    //assuming you are creating a full keg, copying capacity to volume
    keg.currentvolume = keg.kegcapacity;

    this.kegService.createKeg(keg)
      .subscribe(ret => {
        this.toastService.toastCRUD(ret, "Successfully created keg", true);
    }) 
  }

}