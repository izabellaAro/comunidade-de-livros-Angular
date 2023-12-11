import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhasListComponent } from './resenhas-list.component';

describe('ResenhasListComponent', () => {
  let component: ResenhasListComponent;
  let fixture: ComponentFixture<ResenhasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResenhasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenhasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
