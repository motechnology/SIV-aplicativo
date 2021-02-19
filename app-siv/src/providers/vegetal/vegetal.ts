import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class VegetalProvider {

  constructor(public http: HttpClient) {}

  getVegetal(){
    return this.http.get('https://projeto-siv.herokuapp.com/vegetal');    
  }

  async getVegetalTeste() {
    return await this.http.get('https://projeto-siv.herokuapp.com/vegetal').toPromise()
                      .then( info => info); 
  }

  putVegetal(nome,tempIdeal,umiIdeal) {

    let body = {
      nome : nome,
      tempIdeal : String(tempIdeal),
      umidadeIdeal : String(umiIdeal)
    };

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.http.put('https://projeto-siv.herokuapp.com/vegetal', JSON.stringify(body), 
                        {headers}).subscribe(
                                    val => {
                                        console.log("PUT realizado", 
                                                    val);
                                    },
                                    response => {
                                        console.log("PUT não realizado", response);
                                    }
                                );

  }

  postVegetal(nome,tempIdeal,umiIdeal) {

    let body = {
      nome : nome,
      tempIdeal : String(tempIdeal),
      umidadeIdeal : String(umiIdeal)
    };

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.http.post('https://projeto-siv.herokuapp.com/vegetal', JSON.stringify(body), 
                        {headers}).subscribe(
                                    val => {
                                        console.log("POST realizado", 
                                                    val);
                                    },
                                    response => {
                                        console.log("POST não realizado", response);
                                    }
                                );
                                               
  }

  deleteVegetal(vegetal) {
    let data = {
      nome : vegetal
    };

    let data_JSON = JSON.stringify(data)

    //const headers = new HttpHeaders()
    //.set("Content-Type", "application/json");

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data_JSON
     };

  
    return this.http.delete("https://projeto-siv.herokuapp.com/vegetal", httpOptions)
                            .subscribe(
                                (val) => {
                                    console.log("DELETE realizado!", 
                                                val);
                                },
                                response => {
                                    console.log("DELETE não realizado!", response);
                                }
                              );

  }


}
