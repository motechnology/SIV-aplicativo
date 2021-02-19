import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class InformacaoProvider {

  info : any;
  URI = 'https://projeto-siv.herokuapp.com/';
  constructor(public http: HttpClient) {}


  async getStart(){
    //return this.http.get('https://projeto-siv.herokuapp.com/ativo');    
    return await this.http.get('https://projeto-siv.herokuapp.com/ativo').toPromise()
                      .then( info => info);    
  }

  getInfo(){
    return this.http.get('https://projeto-siv.herokuapp.com/informacao');   
  }

  async getInfoTeste() {
    return await this.http.get('https://projeto-siv.herokuapp.com/informacao').toPromise()
                      .then( info => info);    
    //console.log(x)
    //return x
  }


}
