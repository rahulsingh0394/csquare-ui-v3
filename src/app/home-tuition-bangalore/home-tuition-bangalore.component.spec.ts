import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTuitionBangaloreComponent } from './home-tuition-bangalore.component';

describe('HomeTuitionBangaloreComponent', () => {
  let component: HomeTuitionBangaloreComponent;
  let fixture: ComponentFixture<HomeTuitionBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTuitionBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTuitionBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
