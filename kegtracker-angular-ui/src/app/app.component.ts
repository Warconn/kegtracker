import { Component } from '@angular/core';
import {KegtrackingService} from './services/kegtracking.service';
import Keg from './models/keg.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kegtracker-angular-ui';
  
  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private kegService: KegtrackingService
  ) { }

  //Declaring the new todo Object and initilizing it
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

  pourBeer(keg: Keg) {
    
    if(keg.currentvolume > 1){  //current volume is greater than 1
      console.log("Current Volume: " + keg.currentvolume);
      //subtract a pint
      keg.currentvolume--;
      console.log("New Volume: " + keg.currentvolume);

      this.kegService.editKeg(keg)
        .subscribe(ret => {
          console.log(ret);
        })
    }
    console.log(keg.beername +" poured!")
  }
}


