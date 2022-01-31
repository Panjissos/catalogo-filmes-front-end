import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTabelaCategoriaComponent } from './crud-tabela-categoria.component';

describe('CrudTabelaCategoriaComponent', () => {
  let component: CrudTabelaCategoriaComponent;
  let fixture: ComponentFixture<CrudTabelaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTabelaCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTabelaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
