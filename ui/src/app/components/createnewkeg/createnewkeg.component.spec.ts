import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewkegComponent } from './createnewkeg.component';

describe('CreatenewkegComponent', () => {
  let component: CreatenewkegComponent;
  let fixture: ComponentFixture<CreatenewkegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewkegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewkegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
