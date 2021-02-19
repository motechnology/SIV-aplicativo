webpackJsonp([7],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarVasoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vaso_vaso__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vegetal_vegetal__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlterarVasoPage = /** @class */ (function () {
    function AlterarVasoPage(navCtrl, navParams, toastCtrl, vasoProvider, vegetalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.vasoProvider = vasoProvider;
        this.vegetalProvider = vegetalProvider;
        this.vaso = this.navParams.get('vaso');
    }
    AlterarVasoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.vegetalProvider.getVegetal().subscribe(function (info) {
            _this.vegetais = info;
            _this.vegetais = _this.vegetais.lista_vegetais;
        });
    };
    // Método PUT Vaso
    AlterarVasoPage.prototype.alterarVaso = function (vaso, nomeVegetal) {
        var _this = this;
        var aux = true;
        if ((nomeVegetal == undefined) || (nomeVegetal == "")) {
            aux = false;
        }
        else if (this.verificaNomeVegetal(nomeVegetal)) {
            this.vasoProvider.putVaso(vaso.id, nomeVegetal.toLowerCase());
        }
        else {
            aux = false;
        }
        //this.nomeVegetal = ""
        //this.navCtrl.push(CadastroPage)
        // Esse tempo é necessário para ocorrer o processo HTTP
        setTimeout(function () {
            if (aux) {
                _this.sucessoToast();
            }
            else {
                _this.erroToast();
            }
            _this.nomeVegetal = "";
            _this.navCtrl.pop();
        }, 2000);
    };
    AlterarVasoPage.prototype.verificaNomeVegetal = function (nome) {
        // Verifica se existe esse vegetal 
        var aux = false;
        for (var _i = 0, _a = this.vegetais; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.nome == nome.toLowerCase()) {
                aux = true;
            }
        }
        return aux;
    };
    AlterarVasoPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Vaso alterado com sucesso!',
            duration: 3000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    AlterarVasoPage.prototype.erroToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Erro ao alterar vaso!',
            duration: 3000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    AlterarVasoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alterar-vaso',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/alterar-vaso/alterar-vaso.html"*/'<!--\n  Generated template for the AlterarVasoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Alterar Vaso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="vaso.vegetal != null; else vazio ">\n    \n    <h3 style="text-align: center; color:  rgb(125, 197, 103);">Vegetal do Vaso</h3>\n    <ion-card id="cardSpec">\n       <strong>Vegetal presente: </strong> {{vaso.vegetal}} <br>\n    </ion-card>\n\n  </div>\n\n  <ng-template #vazio>\n    <h3 style="text-align: center; color:  rgb(125, 197, 103);">Vegetal do Vaso</h3>\n    <ion-card id="cardSpec">\n      <strong>Vegetal presente: </strong> Nenhum vegetal cadastrado <br>\n    </ion-card>\n  </ng-template>\n\n  <div>\n    <ion-input type="text" text-center [(ngModel)]="nomeVegetal" placeholder="Insira o nome do novo vegetal" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" id="buttonalteraVaso" ion-button (click)="alterarVaso(vaso,nomeVegetal)">Alterar</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/alterar-vaso/alterar-vaso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_vaso_vaso__["a" /* VasoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_vegetal_vegetal__["a" /* VegetalProvider */]])
    ], AlterarVasoPage);
    return AlterarVasoPage;
}());

//# sourceMappingURL=alterar-vaso.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bomba_bomba__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BombaPage = /** @class */ (function () {
    function BombaPage(navCtrl, bombaProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.bombaProvider = bombaProvider;
        this.toastCtrl = toastCtrl;
    }
    BombaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.bombaProvider.getInfo().subscribe(function (info) {
            _this.info = info;
            _this.info = _this.info.lista_vasos;
            _this.vaso1 = _this.info[1]; // GET RETORNA O ID DOS VASOS DECRESCENTE
            _this.vaso2 = _this.info[0];
        });
    };
    BombaPage.prototype.acionaBomba = function (idVaso) {
        var _this = this;
        var aux = true;
        var msg;
        if (idVaso == 1) {
            if (this.vaso1.status == 1) {
                if (this.tempoBomba1 != undefined && this.tempoBomba1 != "") {
                    this.bombaProvider.putBomba(idVaso, this.tempoBomba1);
                    //this.sucessoToast()
                }
                else {
                    //this.erroToast("Valor inválido!")
                    aux = false;
                    msg = "Valor inválido!";
                }
            }
            else {
                //this.erroToast("O vaso não está ativo!")
                aux = false;
                msg = "O vaso não está ativo!";
            }
        }
        else {
            if (this.vaso2.status == 1) {
                if (this.tempoBomba2 != undefined && this.tempoBomba2 != "") {
                    this.bombaProvider.putBomba(idVaso, this.tempoBomba2);
                    //this.sucessoToast()
                }
                else {
                    aux = false;
                    msg = "Valor inválido!";
                }
            }
            else {
                aux = false;
                msg = "O vaso não está ativo!";
            }
        }
        setTimeout(function () {
            if (aux) {
                _this.sucessoToast();
            }
            else {
                _this.erroToast(msg);
            }
            _this.tempoBomba1 = "";
            _this.tempoBomba2 = "";
            _this.ionViewWillEnter();
        }, 2000);
    };
    BombaPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'A bomba será acionada!',
            duration: 3000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    BombaPage.prototype.erroToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    BombaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bomba',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/bomba/bomba.html"*/'<!--\n  Generated template for the SettingsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Bomba</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngIf="vaso1" id="cardspec">\n    <h1>Vaso 1</h1>  \n    <h2>O último acionamento ocorreu em: <strong>{{vaso1["ultimaBomba"]}}</strong></h2>\n    <ion-input max="10" min= "1" type="number" text-center [(ngModel)]="tempoBomba1" placeholder="Insira o tempo de funcionamento da bomba" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button id="buttonBomba" ion-button (click)="acionaBomba(1)">Acionar</button>\n    </div>\n  </ion-card>\n\n  <ion-card *ngIf="vaso2" id="cardspec">\n    <h1>Vaso 2</h1>  \n    <h2>O último acionamento ocorreu em: <strong>{{vaso2["ultimaBomba"]}}</strong></h2>\n    <ion-input max="10" min= "1" type="number" text-center [(ngModel)]="tempoBomba2" placeholder="Insira o tempo de funcionamento da bomba" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button id="buttonBomba" ion-button (click)="acionaBomba(2)">Acionar</button>\n    </div>\n  </ion-card>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/bomba/bomba.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_bomba_bomba__["a" /* BombaProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], BombaPage);
    return BombaPage;
}());

//# sourceMappingURL=bomba.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarVegetalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlterarVegetalPage = /** @class */ (function () {
    function AlterarVegetalPage(navCtrl, navParams, vegetalProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vegetalProvider = vegetalProvider;
        this.toastCtrl = toastCtrl;
        this.vegetal = navParams.get('vegetal');
    }
    AlterarVegetalPage.prototype.ionViewDidLoad = function () { };
    AlterarVegetalPage.prototype.alteraVegetal = function (vegetal, novaTempIdeal, novaUmiIdeal) {
        var _this = this;
        var aux = true;
        if (novaTempIdeal == undefined && novaUmiIdeal == undefined) {
            aux = false;
        }
        else if (novaTempIdeal != undefined && novaUmiIdeal != undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, novaTempIdeal, novaUmiIdeal);
        }
        else if (novaTempIdeal == undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, vegetal.tempIdeal, novaUmiIdeal);
        }
        else if (novaUmiIdeal == undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, novaTempIdeal, vegetal.umidadeIdeal);
        }
        setTimeout(function () {
            if (aux) {
                _this.sucessoToast();
            }
            else {
                _this.erroToast();
            }
            _this.novaTempIdeal = "";
            _this.novaUmiIdeal = "";
            _this.navCtrl.pop();
        }, 2000);
    };
    AlterarVegetalPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Vegetal alterado com sucesso!',
            duration: 3000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    AlterarVegetalPage.prototype.erroToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Nada foi alterado!',
            duration: 3000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    AlterarVegetalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alterar-vegetal',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/alterar-vegetal/alterar-vegetal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Alterar Vegetal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="vegetal">\n    <h3 style="text-align: center; color:  rgb(125, 197, 103);">Dados do Vegetal</h3>\n    <ion-card id="cardSpec">\n       <strong>Nome: </strong> {{vegetal.nome}} <br>\n       <strong>Temperatura ideal (Celsius): </strong> {{vegetal.tempIdeal}} <br>\n       <strong>Umidade ideal (%): </strong> {{vegetal.umidadeIdeal}} <br>\n    </ion-card>\n  </div>\n  \n  <div>\n    <ion-input max="50" min= "0" type="number" text-center [(ngModel)]="novaTempIdeal" placeholder="Nova temperatura ideal" id="placeholderSpec"></ion-input>\n    <ion-input max="100" min= "0" type="number" text-center [(ngModel)]="novaUmiIdeal" placeholder="Nova umidade ideal" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" id="buttonAlteraVegetal" ion-button (click)="alteraVegetal(vegetal,novaTempIdeal,novaUmiIdeal)">Alterar</button>\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/alterar-vegetal/alterar-vegetal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AlterarVegetalPage);
    return AlterarVegetalPage;
}());

//# sourceMappingURL=alterar-vegetal.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarVegetalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriarVegetalPage = /** @class */ (function () {
    function CriarVegetalPage(navCtrl, navParams, vegetalProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vegetalProvider = vegetalProvider;
        this.toastCtrl = toastCtrl;
        this.vegetais = navParams.get('vegetais'); // Lista de vegetais
    }
    CriarVegetalPage.prototype.ionViewDidLoad = function () { };
    CriarVegetalPage.prototype.criaVegetal = function (nome, tempIdeal, umiIdeal) {
        var _this = this;
        var aux = true;
        if ((nome == undefined) || (tempIdeal == undefined) || (umiIdeal == undefined)) {
            aux = false;
        }
        else if (this.verificaNomeVegetal(nome)) {
            aux = false;
        }
        else {
            nome = nome.toLowerCase();
            this.vegetalProvider.postVegetal(nome, tempIdeal, umiIdeal);
        }
        setTimeout(function () {
            if (aux) {
                _this.sucessoToast();
            }
            else {
                _this.erroToast();
            }
            _this.nome = "";
            _this.tempIdeal = "";
            _this.umiIdeal = "";
            _this.navCtrl.pop();
        }, 2000);
    };
    CriarVegetalPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Novo vegetal cadastrado com sucesso!',
            duration: 3000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    CriarVegetalPage.prototype.erroToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Erro ao cadastrar vegetal!',
            duration: 3000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    CriarVegetalPage.prototype.verificaNomeVegetal = function (nome) {
        // Verifica se já existe esse vegetal cadastrado
        var aux = false;
        for (var _i = 0, _a = this.vegetais; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.nome == nome.toLowerCase()) {
                aux = true;
            }
        }
        return aux;
    };
    CriarVegetalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-criar-vegetal',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/criar-vegetal/criar-vegetal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Novo Vegetal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-input type="text" text-center [(ngModel)]="nome" placeholder="Nome" id="placeholderSpec"></ion-input>\n    <ion-input max="50" min= "0" type="number" text-center [(ngModel)]="tempIdeal" placeholder="Temperatura ideal" id="placeholderSpec"></ion-input>\n    <ion-input max="100" min= "0" type="number" text-center [(ngModel)]="umiIdeal" placeholder="Umidade ideal" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" id="buttonCriarVegetal" ion-button (click)="criaVegetal(nome,tempIdeal,umiIdeal)">CRIAR</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/criar-vegetal/criar-vegetal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], CriarVegetalPage);
    return CriarVegetalPage;
}());

//# sourceMappingURL=criar-vegetal.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_email_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_email_email__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailPage = /** @class */ (function () {
    function EmailPage(navCtrl, navParams, toastCtrl, emailProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.emailProvider = emailProvider;
    }
    EmailPage.prototype.ionViewDidLoad = function () { };
    EmailPage.prototype.enviarEmail = function (nome, email, corpo) {
        if ((nome != undefined) && (email != undefined) && (corpo != undefined)) {
            if (__WEBPACK_IMPORTED_MODULE_1_email_validator__["validate"](email)) {
                this.emailProvider.enviarEmail(nome, email, corpo);
                this.sucessoToast();
            }
            else {
                this.erroToast('E-mail inválido');
            }
        }
        else {
            this.erroToast('Erro ao enviar e-mail!');
        }
        this.nome = "";
        this.email = "";
        this.corpo = "";
        this.navCtrl.pop();
    };
    EmailPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Sucesso! Logo mais você receberá um retorno.',
            duration: 2000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    EmailPage.prototype.erroToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/email/email.html"*/'<!--\n  Generated template for the EmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">CONTATO</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    Nome:<br>\n    <ion-input type="text" [(ngModel)]="nome" placeholder="Escreva aqui"> </ion-input> <br> <br>\n    E-mail:<br>\n    <ion-input type="text" [(ngModel)]="email" placeholder="Escreva aqui"> </ion-input> <br> <br>\n    Descrição:<br> <br>\n    <ion-textarea [(ngModel)]="corpo" placeholder="Escreva aqui"></ion-textarea>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" ion-button \n      (click)="enviarEmail(nome,email,corpo)">ENVIAR</button>\n    </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/email/email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_email_email__["a" /* EmailProvider */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_vegetal_vegetal__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var GraficoPage = /** @class */ (function () {
    // Construtor
    function GraficoPage(navCtrl, navParams, informacaoProvider, vasoProvider, vegetalProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.informacaoProvider = informacaoProvider;
        this.vasoProvider = vasoProvider;
        this.vegetalProvider = vegetalProvider;
        this.loadingCtrl = loadingCtrl;
        this.vegetaisVasos = ["", ""];
        this.tempIdealVasos = ["", ""];
        this.umiIdealVasos = ["", ""];
        this.chartOption = { scales: { xAxes: [{ display: false }] } };
        this.vaso1TempData = [{ data: [], label: 'temperatura (C)' }, { data: [], label: 'ideal' }];
        this.vaso1TempType = 'line';
        this.vaso1TempColors = [
            { backgroundColor: 'rgba(123, 166, 255, 0.7)', borderColor: 'rgba(123, 166, 255, 0.7)' },
            { backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)' }
        ];
        this.vaso1UmiData = [{ data: [], label: 'umidade (%)' }, { data: [], label: 'ideal' }];
        this.vaso1UmiType = 'line';
        this.vaso1UmiColors = [
            { backgroundColor: 'rgba(108, 232, 62, 0.3)', borderColor: 'rgba(108, 232, 62, 0.3)' },
            { backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)' }
        ];
        this.vaso2TempData = [{ data: [], label: 'temperatura (C)' }, { data: [], label: 'ideal' }];
        this.vaso2TempType = 'line';
        this.vaso2TempColors = [
            { backgroundColor: 'rgba(123, 166, 255, 0.7)', borderColor: 'rgba(123, 166, 255, 0.7)' },
            { backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)' }
        ];
        this.vaso2UmiData = [{ data: [], label: 'umidade (%)' }, { data: [], label: 'ideal' }];
        this.vaso2UmiType = 'line';
        this.vaso2UmiColors = [
            { backgroundColor: 'rgba(108, 232, 62, 0.3)', borderColor: 'rgba(108, 232, 62, 0.3)' },
            { backgroundColor: 'rgba(255, 255, 0, 0.4)', borderColor: 'rgba(255, 255, 0, 0.4)' }
        ];
    }
    // Animação dos slides
    GraficoPage.prototype.slideChanged = function () {
        this.slides.getActiveIndex();
    };
    // Carrega ao entrar na página
    GraficoPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var info, vegetal, vaso;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.informacaoProvider.getInfoTeste()];
                    case 1:
                        info = _a.sent();
                        this.info = JSON.parse(JSON.stringify(info)).lista_info;
                        console.log(this.info);
                        return [4 /*yield*/, this.vegetalProvider.getVegetalTeste()];
                    case 2:
                        vegetal = _a.sent();
                        this.vegetais = JSON.parse(JSON.stringify(vegetal)).lista_vegetais;
                        console.log(this.vegetais);
                        return [4 /*yield*/, this.vasoProvider.getVasoTeste()];
                    case 3:
                        vaso = _a.sent();
                        this.vasos = JSON.parse(JSON.stringify(vaso)).lista_vasos;
                        console.log(this.vasos);
                        this.presentLoadingDefault(); // Mensagem de carregamento
                        setTimeout(function () {
                            _this.verificaTempUmiAtual(); // Verifica a temperatura e umidade atual do vaso
                            _this.carregaDados();
                        }, 5000);
                        return [2 /*return*/];
                }
            });
        });
    };
    // Mensagem de carregamento
    GraficoPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Carregando dados'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 2000);
    };
    // Verifica temperatura e umidade ideal de cada vaso
    GraficoPage.prototype.verificaTempUmiAtual = function () {
        this.vegetaisVasos[0] = this.vasos[1].vegetal; // Vegetal no vaso 1
        this.vegetaisVasos[1] = this.vasos[0].vegetal; // Vegetal no vaso 0
        var i = 0;
        for (var _i = 0, _a = this.vegetaisVasos; _i < _a.length; _i++) {
            var vegetaisVasos = _a[_i];
            for (var _b = 0, _c = this.vegetais; _b < _c.length; _b++) {
                var vegetal = _c[_b];
                if (vegetal.nome == vegetaisVasos) {
                    this.tempIdealVasos[i] = vegetal.tempIdeal; // Add no vetor de temperatura Ideal 0 - vaso1, 1 - vaso2
                    this.umiIdealVasos[i] = vegetal.umidadeIdeal; // Add no vetor de umidade Ideal
                    i++;
                }
            }
        }
    };
    // Inseri dados nos datasets
    GraficoPage.prototype.carregaDados = function () {
        this.vaso1TempLabels = [];
        this.vaso1TempData[0].data = [];
        this.vaso1TempData[1].data = []; // temp ideal
        this.vaso1UmiLabels = [];
        this.vaso1UmiData[0].data = [];
        this.vaso1UmiData[1].data = []; // umi ideal
        this.vaso2TempLabels = [];
        this.vaso2TempData[0].data = [];
        this.vaso2TempData[1].data = []; // temp ideal
        this.vaso2UmiLabels = [];
        this.vaso2UmiData[0].data = [];
        this.vaso2UmiData[1].data = []; // umi ideal
        try {
            // Carrega dados de temperatura e umidade
            for (var _i = 0, _a = this.info; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.idVaso == 1) {
                    if (item.temperatura != "") {
                        this.vaso1TempData[0].data.push(item.temperatura);
                        if (item.umidade != "") {
                            this.vaso1UmiData[0].data.push(item.umidade);
                        }
                    }
                    this.vaso1TempLabels.push(item.data);
                }
                else {
                    if (item.temperatura != "") {
                        this.vaso2TempData[0].data.push(item.temperatura);
                        if (item.umidade != "") {
                            this.vaso2UmiData[0].data.push(item.umidade);
                        }
                    }
                    this.vaso2TempLabels.push(item.data);
                }
            }
            // Carrega dados de temperatura e umidade IDEAIS
            for (var _b = 0, _c = this.info; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.idVaso == 1) {
                    if (item.temperatura != "") {
                        this.vaso1TempData[1].data.push(Number(this.tempIdealVasos[0]));
                        if (item.umidade != "") {
                            this.vaso1UmiData[1].data.push(Number(this.umiIdealVasos[0]));
                        }
                    }
                }
                else {
                    if (item.temperatura != "") {
                        this.vaso2TempData[1].data.push(Number(this.tempIdealVasos[1]));
                        if (item.umidade != "") {
                            this.vaso2UmiData[1].data.push(Number(this.umiIdealVasos[1]));
                        }
                    }
                }
            }
        }
        catch (error) {
            console.log('erro');
        }
        finally {
            this.info = "";
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]) === "function" && _a || Object)
    ], GraficoPage.prototype, "slides", void 0);
    GraficoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grafico',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/grafico/grafico.html"*/'<!--\n  Generated template for the GraficoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Gráficos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n\n    <ion-slide>\n        <h4 style="text-align: center;"> Vaso 1</h4>\n        <canvas baseChart [datasets]="vaso1TempData" [chartType]="vaso1TempType" [labels]="vaso1TempLabels"\n        [options]="chartOption" [colors]="vaso1TempColors"></canvas>\n          \n        <ion-list>\n          <ion-item>\n            <ion-label>Tipo do gráfico</ion-label>\n            <ion-select [(ngModel)]="vaso1TempType">\n              <ion-option value="line">Linha</ion-option>\n              <ion-option value="bar">Barra</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list> \n\n        <canvas baseChart [datasets]="vaso1UmiData" [chartType]="vaso1UmiType" [labels]="vaso1UmiLabels"\n        [options]="chartOption"  [colors]="vaso1UmiColors"></canvas>\n          \n        <ion-list>\n          <ion-item>\n            <ion-label>Tipo do gráfico</ion-label>\n            <ion-select [(ngModel)]="vaso1UmiType">\n              <ion-option value="line">Linha</ion-option>\n              <ion-option value="bar">Barra</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list> \n    </ion-slide>\n    \n    <ion-slide>\n      <h4 style="text-align: center;"> Vaso 2</h4>\n        <canvas baseChart [datasets]="vaso2TempData" [chartType]="vaso2TempType" [labels]="vaso2TempLabels"\n        [options]="chartOption" [colors]="vaso2TempColors"></canvas>\n          \n        <ion-list>\n          <ion-item>\n            <ion-label>Tipo do gráfico</ion-label>\n            <ion-select [(ngModel)]="vaso2TempType">\n              <ion-option value="line">Linha</ion-option>\n              <ion-option value="bar">Barra</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list> \n\n        <canvas baseChart [datasets]="vaso2UmiData" [chartType]="vaso2UmiType" [labels]="vaso2UmiLabels"\n        [options]="chartOption" [colors]="vaso2UmiColors"></canvas>\n          \n        <ion-list>\n          <ion-item>\n            <ion-label>Tipo do gráfico</ion-label>\n            <ion-select [(ngModel)]="vaso2UmiType">\n              <ion-option value="line">Linha</ion-option>\n              <ion-option value="bar">Barra</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list> \n    </ion-slide>\n\n  </ion-slides>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/grafico/grafico.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__["a" /* InformacaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__["a" /* InformacaoProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__["a" /* VasoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__["a" /* VasoProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_vegetal_vegetal__["a" /* VegetalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_vegetal_vegetal__["a" /* VegetalProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _g || Object])
    ], GraficoPage);
    return GraficoPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=grafico.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var InformacaoPage = /** @class */ (function () {
    function InformacaoPage(navCtrl, informacaoProvider) {
        this.navCtrl = navCtrl;
        this.informacaoProvider = informacaoProvider;
    }
    InformacaoPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.informacaoProvider.getInfoTeste()];
                    case 1:
                        res = _a.sent();
                        this.info = JSON.parse(JSON.stringify(res)).lista_info;
                        return [2 /*return*/];
                }
            });
        });
    };
    InformacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-informacao',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/informacao/informacao.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Informação</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <table id="tabelaspec">\n   \n    <tr>\n      <th>Vaso</th>\n      <th>Vegetal</th>\n      <th>Temp.</th>\n      <th>Umidade</th>\n      <th>Data</th>\n    </tr>\n    <ng-container *ngFor="let item of info">\n      <tr>\n        <td>{{item.idVaso}}</td>\n        <td>{{item.nomeVegetal}}</td>\n        <td>{{item.temperatura}}</td>\n        <td>{{item.umidade}}</td>\n        <td>{{item.data}}</td>\n      </tr>\n    </ng-container>\n  </table> \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/informacao/informacao.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__["a" /* InformacaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__["a" /* InformacaoProvider */]) === "function" && _b || Object])
    ], InformacaoPage);
    return InformacaoPage;
    var _a, _b;
}());

//# sourceMappingURL=informacao.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alterar-vaso/alterar-vaso.module": [
		432,
		6
	],
	"../pages/alterar-vegetal/alterar-vegetal.module": [
		434,
		5
	],
	"../pages/bomba/bomba.module": [
		433,
		4
	],
	"../pages/criar-vegetal/criar-vegetal.module": [
		435,
		3
	],
	"../pages/email/email.module": [
		436,
		2
	],
	"../pages/grafico/grafico.module": [
		437,
		1
	],
	"../pages/informacao/informacao.module": [
		438,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BombaProvider = /** @class */ (function () {
    function BombaProvider(http) {
        this.http = http;
    }
    BombaProvider.prototype.getInfo = function () {
        return this.http.get('https://projeto-siv.herokuapp.com/vaso');
    };
    BombaProvider.prototype.putBomba = function (idVaso, tempoBomba) {
        var body = {
            idVaso: String(idVaso),
            tempo: tempoBomba
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        //console.log(JSON.stringify(body))
        return this.http.put('https://projeto-siv.herokuapp.com/bomba', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("PUT realizado", val);
        }, function (response) {
            console.log("PUT não realizado", response);
        });
    };
    BombaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BombaProvider);
    return BombaProvider;
}());

//# sourceMappingURL=bomba.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailProvider = /** @class */ (function () {
    function EmailProvider(http) {
        this.http = http;
    }
    EmailProvider.prototype.enviarEmail = function (nome, email, corpo) {
        var body = {
            nome: nome,
            email: email,
            corpo: corpo
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.post('http://localhost:5000/email', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("POST realizado", val);
        }, function (response) {
            console.log("POST não realizado", response);
        });
    };
    EmailProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EmailProvider);
    return EmailProvider;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informacao_informacao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bomba_bomba__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grafico_grafico__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__bomba_bomba__["a" /* BombaPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__informacao_informacao__["a" /* InformacaoPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__grafico_grafico__["a" /* GraficoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Sobre" tabIcon="ios-information-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Cadastro" tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bomba" tabIcon="water"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Informacao" tabIcon="ios-leaf"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Gráficos" tabIcon="md-analytics"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_email__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_informacao_informacao__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, toastCtrl, informacaoProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.informacaoProvider = informacaoProvider;
        this.loadingCtrl = loadingCtrl;
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, res2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.informacaoProvider.getStart()
                        //console.log(JSON.parse(JSON.stringify(res))) // Objeto JSON
                    ];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.informacaoProvider.getInfoTeste()
                            //console.log(JSON.parse(JSON.stringify(res2)).lista_info)
                        ];
                    case 2:
                        res2 = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Redireciona para a página de enviar email
    AboutPage.prototype.enviarEmailPagina = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__email_email__["a" /* EmailPage */]); };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="text-align: center;">\n    <h2>Sistema de Irrigação Vertical</h2>\n    <h5>\n      Trabalho desenvolvido para a disciplina de Projeto Integrador III\n      do curso de Engenharia de Telecomunicações IFSC-SJ. Integrantes:\n    </h5>\n    <ion-list>\n      <ion-item>\n        Jeneffer Farias \n      </ion-item>\n      <ion-item>\n        Marcelo Bittencourt\n      </ion-item>\n      <ion-item>\n        Osvaldo Neto\n      </ion-item>\n    </ion-list>\n    \n    <button style="background-color: rgb(125, 197, 103)" id="buttonEmail" \n    ion-button (click)="enviarEmailPagina()">CONTATO</button>\n  </div>\n  <footer style="position: absolute; bottom: 5px;">\n    Versão 1.0 - janeiro de 2021\n  </footer>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_informacao_informacao__["a" /* InformacaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_informacao_informacao__["a" /* InformacaoProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alterar_vegetal_alterar_vegetal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__criar_vegetal_criar_vegetal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alterar_vaso_alterar_vaso__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, vegetalProvider, vasoProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.vegetalProvider = vegetalProvider;
        this.vasoProvider = vasoProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    // Página onde haverá método PUT Vegetal
    CadastroPage.prototype.alterarVegetalPagina = function (vegetal) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__alterar_vegetal_alterar_vegetal__["a" /* AlterarVegetalPage */], { vegetal: vegetal });
    };
    // Página onde haverá método POST Vegetal
    CadastroPage.prototype.criarVegetalPagina = function (vegetais) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */], { vegetais: vegetais });
    };
    // Página onde haverá método PUT Vaso
    CadastroPage.prototype.alterarVasoPagina = function (vaso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__alterar_vaso_alterar_vaso__["a" /* AlterarVasoPage */], { vaso: vaso });
    };
    // MÉTODO DELETE Vegetal
    CadastroPage.prototype.limpaVegetal = function (vegetal) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Excluir vegetal?',
            message: 'Realmente deseja excluir o vegetal?',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        _this.limpaVasoToast('Nada foi alterado!'); // Utiliza o mesmo Toast do Vaso
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        if (_this.verificaVegetalAtivo(vegetal) == 2) {
                            setTimeout(function () {
                                _this.vegetalProvider.deleteVegetal(vegetal);
                                _this.limpaVasoToast('Vegetal excluído!');
                                _this.ionViewWillEnter();
                            }, 2000);
                        }
                        else {
                            _this.erroLimpaVegetalToast();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    // Método DELETE Vaso
    CadastroPage.prototype.limpaVaso = function (vaso) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Desativar vaso?',
            message: 'Realmente deseja desativar o vaso?',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        _this.limpaVasoToast('Nada foi alterado!');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        setTimeout(function () {
                            _this.vasoProvider.deleteVaso(vaso.id);
                            _this.limpaVasoToast('Vaso desativado!');
                            _this.ionViewWillEnter();
                        }, 1500);
                    }
                }
            ]
        });
        confirm.present();
    };
    // Toast do DELETE Vaso
    CadastroPage.prototype.limpaVasoToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            cssClass: 'toast-limpa'
        });
        toast.present();
    };
    // Toas para erro ao deletar Vegetal
    CadastroPage.prototype.erroLimpaVegetalToast = function () {
        var toast = this.toastCtrl.create({
            message: 'O Vegetal ainda está sendo utilizado!',
            duration: 3000,
            cssClass: 'toast-erro-vegetal'
        });
        toast.present();
    };
    // Métodos GET Vegetal e Vaso
    CadastroPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vegetal, vaso;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vegetalProvider.getVegetalTeste()];
                    case 1:
                        vegetal = _a.sent();
                        this.vegetais = JSON.parse(JSON.stringify(vegetal)).lista_vegetais;
                        return [4 /*yield*/, this.vasoProvider.getVasoTeste()];
                    case 2:
                        vaso = _a.sent();
                        this.vasos = JSON.parse(JSON.stringify(vaso)).lista_vasos;
                        console.log(this.vegetais);
                        console.log(this.vasos);
                        return [2 /*return*/];
                }
            });
        });
    };
    // Verifica se é possível deletar o vegetal
    CadastroPage.prototype.verificaVegetalAtivo = function (vegetal) {
        var aux = 0;
        for (var _i = 0, _a = this.vasos; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.vegetal != vegetal) {
                aux++;
            }
        }
        return aux;
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/cadastro/cadastro.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">\n      Cadastrar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n    <div style="text-align: center;" *ngIf="vegetais">\n      <button id="buttonBomba" ion-button (click)="criarVegetalPagina(vegetais)">NOVO VEGETAL</button>\n    </div>\n  <br>\n  \n  <ion-row>\n    <ion-col id="colSpec">\n      <h4>Vegetais</h4>\n      <ion-card>\n       <ion-item *ngFor="let item of vegetais">\n        <ion-label>{{item.nome}}</ion-label>\n        <button ion-button outline item-end (click)="alterarVegetalPagina(item)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button outline item-end (click)="limpaVegetal(item.nome)">\n          <ion-icon id="butDelete" name="md-trash" color="danger"></ion-icon>\n        </button>\n       </ion-item>\n      </ion-card>\n    </ion-col>\n\n    <ion-col id="colSpec">\n      <h4>Vasos</h4>\n      <ion-card>\n       <ion-item *ngFor="let item of vasos">\n        <ion-label>Vaso {{item.id}}: {{item.vegetal}}</ion-label>\n        <button ion-button outline item-end (click)="alterarVasoPagina(item)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button outline item-end (click)="limpaVaso(item)">\n          <ion-icon id="butDelete" name="md-trash" color="danger"></ion-icon>\n        </button>\n       </ion-item>\n      </ion-card>\n    </ion-col>\n\n  </ion-row>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__["a" /* VasoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__["a" /* VasoProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], CadastroPage);
    return CadastroPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var VegetalProvider = /** @class */ (function () {
    function VegetalProvider(http) {
        this.http = http;
    }
    VegetalProvider.prototype.getVegetal = function () {
        return this.http.get('https://projeto-siv.herokuapp.com/vegetal');
    };
    VegetalProvider.prototype.getVegetalTeste = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('https://projeto-siv.herokuapp.com/vegetal').toPromise()
                            .then(function (info) { return info; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VegetalProvider.prototype.putVegetal = function (nome, tempIdeal, umiIdeal) {
        var body = {
            nome: nome,
            tempIdeal: String(tempIdeal),
            umidadeIdeal: String(umiIdeal)
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.put('https://projeto-siv.herokuapp.com/vegetal', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("PUT realizado", val);
        }, function (response) {
            console.log("PUT não realizado", response);
        });
    };
    VegetalProvider.prototype.postVegetal = function (nome, tempIdeal, umiIdeal) {
        var body = {
            nome: nome,
            tempIdeal: String(tempIdeal),
            umidadeIdeal: String(umiIdeal)
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.post('https://projeto-siv.herokuapp.com/vegetal', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("POST realizado", val);
        }, function (response) {
            console.log("POST não realizado", response);
        });
    };
    VegetalProvider.prototype.deleteVegetal = function (vegetal) {
        var data = {
            nome: vegetal
        };
        var data_JSON = JSON.stringify(data);
        //const headers = new HttpHeaders()
        //.set("Content-Type", "application/json");
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), body: data_JSON
        };
        return this.http.delete("https://projeto-siv.herokuapp.com/vegetal", httpOptions)
            .subscribe(function (val) {
            console.log("DELETE realizado!", val);
        }, function (response) {
            console.log("DELETE não realizado!", response);
        });
    };
    VegetalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], VegetalProvider);
    return VegetalProvider;
    var _a;
}());

//# sourceMappingURL=vegetal.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_x__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_informacao_informacao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cadastro_cadastro__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bomba_bomba__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_alterar_vegetal_alterar_vegetal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_alterar_vaso_alterar_vaso__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_criar_vegetal_criar_vegetal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_email_email__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_grafico_grafico__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_bomba_bomba__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_vaso_vaso__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_vegetal_vegetal__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_informacao_informacao__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_email_email__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_informacao_informacao__["a" /* InformacaoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bomba_bomba__["a" /* BombaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_alterar_vegetal_alterar_vegetal__["a" /* AlterarVegetalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alterar_vaso_alterar_vaso__["a" /* AlterarVasoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_grafico_grafico__["a" /* GraficoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts_x__["a" /* ChartsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alterar-vaso/alterar-vaso.module#AlterarVasoPageModule', name: 'AlterarVasoPage', segment: 'alterar-vaso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bomba/bomba.module#BombaPageModule', name: 'BombaPage', segment: 'bomba', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alterar-vegetal/alterar-vegetal.module#AlterarVegetalPageModule', name: 'AlterarVegetalPage', segment: 'alterar-vegetal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/criar-vegetal/criar-vegetal.module#CriarVegetalPageModule', name: 'CriarVegetalPage', segment: 'criar-vegetal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grafico/grafico.module#GraficoPageModule', name: 'GraficoPage', segment: 'grafico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/informacao/informacao.module#InformacaoPageModule', name: 'InformacaoPage', segment: 'informacao', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_informacao_informacao__["a" /* InformacaoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bomba_bomba__["a" /* BombaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_alterar_vegetal_alterar_vegetal__["a" /* AlterarVegetalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alterar_vaso_alterar_vaso__["a" /* AlterarVasoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_grafico_grafico__["a" /* GraficoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_bomba_bomba__["a" /* BombaProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_vaso_vaso__["a" /* VasoProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_vegetal_vegetal__["a" /* VegetalProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_informacao_informacao__["a" /* InformacaoProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_email_email__["a" /* EmailProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn-bd": 227,
	"./bn-bd.js": 227,
	"./bn.js": 226,
	"./bo": 228,
	"./bo.js": 228,
	"./br": 229,
	"./br.js": 229,
	"./bs": 230,
	"./bs.js": 230,
	"./ca": 231,
	"./ca.js": 231,
	"./cs": 232,
	"./cs.js": 232,
	"./cv": 233,
	"./cv.js": 233,
	"./cy": 234,
	"./cy.js": 234,
	"./da": 235,
	"./da.js": 235,
	"./de": 236,
	"./de-at": 237,
	"./de-at.js": 237,
	"./de-ch": 238,
	"./de-ch.js": 238,
	"./de.js": 236,
	"./dv": 239,
	"./dv.js": 239,
	"./el": 240,
	"./el.js": 240,
	"./en-au": 241,
	"./en-au.js": 241,
	"./en-ca": 242,
	"./en-ca.js": 242,
	"./en-gb": 243,
	"./en-gb.js": 243,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-il": 245,
	"./en-il.js": 245,
	"./en-in": 246,
	"./en-in.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./en-sg": 248,
	"./en-sg.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 250,
	"./es-do": 251,
	"./es-do.js": 251,
	"./es-mx": 252,
	"./es-mx.js": 252,
	"./es-us": 253,
	"./es-us.js": 253,
	"./es.js": 250,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fil": 258,
	"./fil.js": 258,
	"./fo": 259,
	"./fo.js": 259,
	"./fr": 260,
	"./fr-ca": 261,
	"./fr-ca.js": 261,
	"./fr-ch": 262,
	"./fr-ch.js": 262,
	"./fr.js": 260,
	"./fy": 263,
	"./fy.js": 263,
	"./ga": 264,
	"./ga.js": 264,
	"./gd": 265,
	"./gd.js": 265,
	"./gl": 266,
	"./gl.js": 266,
	"./gom-deva": 267,
	"./gom-deva.js": 267,
	"./gom-latn": 268,
	"./gom-latn.js": 268,
	"./gu": 269,
	"./gu.js": 269,
	"./he": 270,
	"./he.js": 270,
	"./hi": 271,
	"./hi.js": 271,
	"./hr": 272,
	"./hr.js": 272,
	"./hu": 273,
	"./hu.js": 273,
	"./hy-am": 274,
	"./hy-am.js": 274,
	"./id": 275,
	"./id.js": 275,
	"./is": 276,
	"./is.js": 276,
	"./it": 277,
	"./it-ch": 278,
	"./it-ch.js": 278,
	"./it.js": 277,
	"./ja": 279,
	"./ja.js": 279,
	"./jv": 280,
	"./jv.js": 280,
	"./ka": 281,
	"./ka.js": 281,
	"./kk": 282,
	"./kk.js": 282,
	"./km": 283,
	"./km.js": 283,
	"./kn": 284,
	"./kn.js": 284,
	"./ko": 285,
	"./ko.js": 285,
	"./ku": 286,
	"./ku.js": 286,
	"./ky": 287,
	"./ky.js": 287,
	"./lb": 288,
	"./lb.js": 288,
	"./lo": 289,
	"./lo.js": 289,
	"./lt": 290,
	"./lt.js": 290,
	"./lv": 291,
	"./lv.js": 291,
	"./me": 292,
	"./me.js": 292,
	"./mi": 293,
	"./mi.js": 293,
	"./mk": 294,
	"./mk.js": 294,
	"./ml": 295,
	"./ml.js": 295,
	"./mn": 296,
	"./mn.js": 296,
	"./mr": 297,
	"./mr.js": 297,
	"./ms": 298,
	"./ms-my": 299,
	"./ms-my.js": 299,
	"./ms.js": 298,
	"./mt": 300,
	"./mt.js": 300,
	"./my": 301,
	"./my.js": 301,
	"./nb": 302,
	"./nb.js": 302,
	"./ne": 303,
	"./ne.js": 303,
	"./nl": 304,
	"./nl-be": 305,
	"./nl-be.js": 305,
	"./nl.js": 304,
	"./nn": 306,
	"./nn.js": 306,
	"./oc-lnc": 307,
	"./oc-lnc.js": 307,
	"./pa-in": 308,
	"./pa-in.js": 308,
	"./pl": 309,
	"./pl.js": 309,
	"./pt": 310,
	"./pt-br": 311,
	"./pt-br.js": 311,
	"./pt.js": 310,
	"./ro": 312,
	"./ro.js": 312,
	"./ru": 313,
	"./ru.js": 313,
	"./sd": 314,
	"./sd.js": 314,
	"./se": 315,
	"./se.js": 315,
	"./si": 316,
	"./si.js": 316,
	"./sk": 317,
	"./sk.js": 317,
	"./sl": 318,
	"./sl.js": 318,
	"./sq": 319,
	"./sq.js": 319,
	"./sr": 320,
	"./sr-cyrl": 321,
	"./sr-cyrl.js": 321,
	"./sr.js": 320,
	"./ss": 322,
	"./ss.js": 322,
	"./sv": 323,
	"./sv.js": 323,
	"./sw": 324,
	"./sw.js": 324,
	"./ta": 325,
	"./ta.js": 325,
	"./te": 326,
	"./te.js": 326,
	"./tet": 327,
	"./tet.js": 327,
	"./tg": 328,
	"./tg.js": 328,
	"./th": 329,
	"./th.js": 329,
	"./tk": 330,
	"./tk.js": 330,
	"./tl-ph": 331,
	"./tl-ph.js": 331,
	"./tlh": 332,
	"./tlh.js": 332,
	"./tr": 333,
	"./tr.js": 333,
	"./tzl": 334,
	"./tzl.js": 334,
	"./tzm": 335,
	"./tzm-latn": 336,
	"./tzm-latn.js": 336,
	"./tzm.js": 335,
	"./ug-cn": 337,
	"./ug-cn.js": 337,
	"./uk": 338,
	"./uk.js": 338,
	"./ur": 339,
	"./ur.js": 339,
	"./uz": 340,
	"./uz-latn": 341,
	"./uz-latn.js": 341,
	"./uz.js": 340,
	"./vi": 342,
	"./vi.js": 342,
	"./x-pseudo": 343,
	"./x-pseudo.js": 343,
	"./yo": 344,
	"./yo.js": 344,
	"./zh-cn": 345,
	"./zh-cn.js": 345,
	"./zh-hk": 346,
	"./zh-hk.js": 346,
	"./zh-mo": 347,
	"./zh-mo.js": 347,
	"./zh-tw": 348,
	"./zh-tw.js": 348
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 429;

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/git/Aplicativo-SIV/app-siv/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VasoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var VasoProvider = /** @class */ (function () {
    function VasoProvider(http) {
        this.http = http;
    }
    VasoProvider.prototype.getVaso = function () {
        return this.http.get('https://projeto-siv.herokuapp.com/vaso');
    };
    VasoProvider.prototype.getVasoTeste = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('https://projeto-siv.herokuapp.com/vaso').toPromise()
                            .then(function (info) { return info; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VasoProvider.prototype.putVaso = function (idVaso, nomeVegetal) {
        var body = {
            idVaso: String(idVaso),
            nomeVegetal: nomeVegetal
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.put('https://projeto-siv.herokuapp.com/vaso', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("PUT realizado", val);
        }, function (response) {
            console.log("PUT não realizado", response);
        });
    };
    VasoProvider.prototype.deleteVaso = function (vaso) {
        var data = {
            idVaso: String(vaso)
        };
        var data_JSON = JSON.stringify(data);
        //const headers = new HttpHeaders()
        //.set("Content-Type", "application/json");
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), body: data_JSON
        };
        return this.http.delete("https://projeto-siv.herokuapp.com/vaso", httpOptions)
            .subscribe(function (val) {
            console.log("DELETE realizado!", val);
        }, function (response) {
            console.log("DELETE não realizado!", response);
        });
    };
    VasoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], VasoProvider);
    return VasoProvider;
    var _a;
}());

//# sourceMappingURL=vaso.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var InformacaoProvider = /** @class */ (function () {
    function InformacaoProvider(http) {
        this.http = http;
        this.URI = 'https://projeto-siv.herokuapp.com/';
    }
    InformacaoProvider.prototype.getStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('https://projeto-siv.herokuapp.com/ativo').toPromise()
                            .then(function (info) { return info; })];
                    case 1: 
                    //return this.http.get('https://projeto-siv.herokuapp.com/ativo');    
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InformacaoProvider.prototype.getInfo = function () {
        return this.http.get('https://projeto-siv.herokuapp.com/informacao');
    };
    InformacaoProvider.prototype.getInfoTeste = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('https://projeto-siv.herokuapp.com/informacao').toPromise()
                            .then(function (info) { return info; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InformacaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], InformacaoProvider);
    return InformacaoProvider;
    var _a;
}());

//# sourceMappingURL=informacao.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map