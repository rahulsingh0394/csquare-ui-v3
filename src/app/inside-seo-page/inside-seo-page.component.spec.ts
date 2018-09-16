import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideSeoPageComponent } from './inside-seo-page.component';

describe('InsideSeoPageComponent', () => {
  let component: InsideSeoPageComponent;
  let fixture: ComponentFixture<InsideSeoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideSeoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideSeoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
