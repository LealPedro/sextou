import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';

/**
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
  providers: [
    ProdutoProvider
  ]
})
export class BuscaPage {

  private busca: string;

  produtos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private prodPvr: ProdutoProvider) {
  }

  ionViewDidLoad() {
  }

  listaProduto() {
    this.prodPvr.getProduct(this.busca).subscribe(
      prod => {
        let resultado = (prod as any)._body;
        let json = JSON.parse(resultado);
        this.produtos = json;
      },
      error => {
        console.log((error as any)._body);
      } 
    );
  }

}
