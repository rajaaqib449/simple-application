import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClothesComponent } from './view-clothes.component';

describe('ViewClothesComponent', () => {
  let component: ViewClothesComponent;
  let fixture: ComponentFixture<ViewClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
