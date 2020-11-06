class CalcController {
    
    constructor() {

        this._displayCalc = "0";
        this._dataAtual; 

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(displayCalc) {
        this._displayCalc = displayCalc;
    }


    get dataAtual() {
        return this.dataAtual;
    }

    set dataAtual(dataAtual) {
        this.dataAtual = dataAtual;
    }
}
