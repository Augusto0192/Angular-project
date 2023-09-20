import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousesComponent } from './couses.component';

describe('CousesComponent', () => {
  let component: CousesComponent;
  let fixture: ComponentFixture<CousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CousesComponent]
    });
    fixture = TestBed.createComponent(CousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
