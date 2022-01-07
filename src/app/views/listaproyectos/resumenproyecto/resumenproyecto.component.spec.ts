import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenproyectoComponent } from './resumenproyecto.component';

describe('ResumenproyectoComponent', () => {
  let component: ResumenproyectoComponent;
  let fixture: ComponentFixture<ResumenproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
