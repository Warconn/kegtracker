import { Component, OnInit } from '@angular/core';
import {KegtrackingService} from '@app/services/kegtracking.service';
import Keg from '@app/models/keg.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private kegService: KegtrackingService
  ) { }

  public newKeg: Keg = new Keg()

  //An Empty list for the visible todo list
  kegList: Keg[];

  ngOnInit(): void {

    //At component initialization the 
    this.kegService.getKegs()
      .subscribe(kegs => {
        //assign the todolist property to the proper http response
        this.kegList = kegs
        console.log(kegs)
      })
  }

  pourBeer(keg: Keg, ounces: number) {
    
    if(keg.currentvolume > 1){  //current volume is greater than 1
      console.log("Current Volume: " + keg.currentvolume);
      
      console.log(keg.beername +" poured " + ounces + "ounces");

      //subtract a pint
      keg.currentvolume--;
      console.log("New Volume: " + keg.currentvolume);

      this.kegService.editKeg(keg)
        .subscribe(ret => {
          console.log(ret);
        })
    }
  }
}


