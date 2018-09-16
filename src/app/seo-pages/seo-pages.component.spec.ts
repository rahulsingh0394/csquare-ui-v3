import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPagesComponent } from './seo-pages.component';

describe('SeoPagesComponent', () => {
  let component: SeoPagesComponent;
  let fixture: ComponentFixture<SeoPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
