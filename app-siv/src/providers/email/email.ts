import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmailProvider {

  constructor(public http: HttpClient) {}

  enviarEmail(nome,email,corpo) {
    let body = {
      nome : nome,
      email : email,
      corpo : corpo
    };

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.http.post('http://localhost:5000/email', JSON.stringify(body), 
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
  
}
