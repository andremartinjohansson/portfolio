import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QvantelComponent } from './qvantel.component';

describe('QvantelComponent', () => {
  let component: QvantelComponent;
  let fixture: ComponentFixture<QvantelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QvantelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QvantelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
