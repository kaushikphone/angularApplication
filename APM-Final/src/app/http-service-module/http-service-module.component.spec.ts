import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceModuleComponent } from './http-service-module.component';

describe('HttpServiceModuleComponent', () => {
  let component: HttpServiceModuleComponent;
  let fixture: ComponentFixture<HttpServiceModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServiceModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServiceModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
