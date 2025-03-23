import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParahComponent } from './parah.component';

describe('ParahComponent', () => {
  let component: ParahComponent;
  let fixture: ComponentFixture<ParahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
