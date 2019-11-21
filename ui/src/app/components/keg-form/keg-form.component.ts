import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { KegtrackingService } from '@app/services/kegtracking.service';
import Keg from '@app/models/keg.model';

@Component({
  selector: 'app-keg-form',
  templateUrl: './keg-form.component.html',
  styleUrls: ['./keg-form.component.css']
})
export class KegFormComponent implements OnInit {
  constructor(private kegService: KegtrackingService,
    kegForm: FormBuilder
  ) { }

  kegList: Keg[];
  ngOnInit(): void {
    this.kegService.getKegs()
      .subscribe(kegs => {
        this.kegList = kegs
        console.log(kegs)
      })
  }

  onSubmit() {
    alert('Thanks!');
  }
}
