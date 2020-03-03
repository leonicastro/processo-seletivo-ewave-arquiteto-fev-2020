import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentadorPedidoComponent } from './movimentador-pedido.component';

describe('MovimentadorPedidoComponent', () => {
  let component: MovimentadorPedidoComponent;
  let fixture: ComponentFixture<MovimentadorPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentadorPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentadorPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
