import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFilmeTabelaComponent } from './crud-filme-tabela.component';

describe('CrudFilmeTabelaComponent', () => {
  let component: CrudFilmeTabelaComponent;
  let fixture: ComponentFixture<CrudFilmeTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFilmeTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFilmeTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
