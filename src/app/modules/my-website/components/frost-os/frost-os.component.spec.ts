import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostOSComponent } from './frost-os.component';

describe('FrostOSComponent', () => {
  let component: FrostOSComponent;
  let fixture: ComponentFixture<FrostOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrostOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
