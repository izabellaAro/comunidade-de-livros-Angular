import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhaFormComponent } from './resenha-form.component';

describe('ResenhaFormComponent', () => {
  let component: ResenhaFormComponent;
  let fixture: ComponentFixture<ResenhaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResenhaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenhaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
