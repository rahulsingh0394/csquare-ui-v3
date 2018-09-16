import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSeoComponent } from './banner-seo.component';

describe('BannerSeoComponent', () => {
  let component: BannerSeoComponent;
  let fixture: ComponentFixture<BannerSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
