import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkatsukiComponent } from './akatsuki.component';

describe('AkatsukiComponent', () => {
  let component: AkatsukiComponent;
  let fixture: ComponentFixture<AkatsukiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkatsukiComponent]
    });
    fixture = TestBed.createComponent(AkatsukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
