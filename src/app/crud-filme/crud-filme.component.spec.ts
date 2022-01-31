import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFilmeComponent } from './crud-filme.component';

describe('CrudFilmeComponent', () => {
  let component: CrudFilmeComponent;
  let fixture: ComponentFixture<CrudFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
