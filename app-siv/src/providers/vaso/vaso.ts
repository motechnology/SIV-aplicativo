import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class VasoProvider {

  constructor(public http: HttpClient) {}

  getVaso(){
    return this.http.get('https://projeto-siv.herokuapp.com/vaso');    
  }

  async getVasoTeste() {
    return await this.http.get('https://projeto-siv.herokuapp.com/vaso').toPromise()
                      .then( info => info); 
  }

  putVaso(idVaso,nomeVegetal) {

    let body = {
      idVaso : String(idVaso),
      nomeVegetal : nomeVegetal
    };

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.http.put('https://projeto-siv.herokuapp.com/vaso', JSON.stringify(body), 
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
  
  deleteVaso(vaso) {
    let data = {
      idVaso : String(vaso)
    };

    let data_JSON = JSON.stringify(data)

    //const headers = new HttpHeaders()
    //.set("Content-Type", "application/json");

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data_JSON
     };

  
    return this.http.delete("https://projeto-siv.herokuapp.com/vaso", httpOptions)
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
