import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubadminopComponent } from './subadminop.component';

describe('SubadminopComponent', () => {
  let component: SubadminopComponent;
  let fixture: ComponentFixture<SubadminopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubadminopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubadminopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
