import { Injectable } from '@angular/core';
import { find, findIndex } from 'rxjs';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  atualizaCarrinho(produtoId: number, quantidade: number) {
    this.itens[this.itens.findIndex(itens => itens.id == produtoId)].quantidade = quantidade;
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  
  adicionarAoCarrrinho(produto: IProdutoCarrinho) {
    if (this.itens.find(item => item.id == produto.id)) {
      produto.quantidade = this.itens[this.itens.findIndex(itens => itens.id == produto.id)].quantidade + produto.quantidade;
      this.removerCarrinho(produto.id);
      this.itens.push(produto);
      localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }
    else {
      this.itens.push(produto);
      localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }
  }
  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

  removerCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

}
