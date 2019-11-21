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

  ngOnInit(): void {
    this.kegService.getKegs()
      .subscribe(kegs => {
        this.kegList = kegs
        console.log(kegs)
      })
   }
}