import { Component, OnInit } from '@angular/core';
import { KegtrackingService } from '@app/services/kegtracking.service';
import Keg from '@app/models/keg.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private kegService: KegtrackingService
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
    console.log("saving keg");
    console.log(keg);
    this.kegService.editKeg(keg)
      .subscribe(ret => {
        console.log(ret);
    })
  }

  createNewKeg(keg: Keg){
    //assuming you are creating a full keg, copying capacity to volume
    keg.currentvolume = keg.kegcapacity;

    console.log("creating new keg");
    console.log(keg);

    this.kegService.createKeg(keg)
      .subscribe(ret => {
        console.log(ret);
      }) 
  }

}