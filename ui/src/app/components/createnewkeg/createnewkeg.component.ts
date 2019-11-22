import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-createnewkeg',
  templateUrl: './createnewkeg.component.html',
  styleUrls: ['./createnewkeg.component.css']
})
export class CreatenewkegComponent implements OnInit {
  kegForm = new FormGroup({
    beername: new FormControl(''),
    kegnum: new FormControl(0),
    kegcapacity: new FormControl(0),
    currentvolume: new FormControl(0),
    abv: new FormControl(0),
    ibu: new FormControl(0),
  });
  
  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.kegForm.value);
  }
}
