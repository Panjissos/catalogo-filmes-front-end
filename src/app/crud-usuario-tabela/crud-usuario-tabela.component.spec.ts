import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsuarioTabelaComponent } from './crud-usuario-tabela.component';

describe('CrudUsuarioTabelaComponent', () => {
  let component: CrudUsuarioTabelaComponent;
  let fixture: ComponentFixture<CrudUsuarioTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUsuarioTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsuarioTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
