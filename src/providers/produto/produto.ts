import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Produto } from './product';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider {
 
  private BASE_PATH = "http://localhost/ws/produto.json"
  /*setProduct(nome: string, tamanho: string, valor: number): any {
    throw new Error("Method not implemented.");
  }*/ 

  constructor(public http: Http) {}

  

  getProduct() {
    return this.http.get<Produto[]>(this.BASE_PATH);
  }

  /*setProduct(nome: string, email: string, valor: number) {
    return new Promise((resolve, reject) => {
      var produtos = {
        nome: nome,
        tamanho: tamanho,
        valor: valor
      };

      this.http.post(this.BASE_PATH)
      ._subscribe((result: any) => {
        resolve(result.json());
        console.log(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }*/

}
