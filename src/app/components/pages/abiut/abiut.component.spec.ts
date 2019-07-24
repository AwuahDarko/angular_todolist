import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiutComponent } from './abiut.component';

describe('AbiutComponent', () => {
  let component: AbiutComponent;
  let fixture: ComponentFixture<AbiutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
