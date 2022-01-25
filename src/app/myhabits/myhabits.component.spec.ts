import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhabitsComponent } from './myhabits.component';

describe('MyhabitsComponent', () => {
  let component: MyhabitsComponent;
  let fixture: ComponentFixture<MyhabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhabitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
