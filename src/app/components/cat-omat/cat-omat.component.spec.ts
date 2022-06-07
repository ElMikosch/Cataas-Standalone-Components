import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatOMatComponent } from './cat-omat.component';

describe('CatOMatComponent', () => {
  let component: CatOMatComponent;
  let fixture: ComponentFixture<CatOMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatOMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatOMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
