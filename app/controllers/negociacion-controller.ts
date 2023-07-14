import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from "../models/negociaciones.js";

export class NegociacionController{
    private inputFecha: HTMLInputElement;
    private inputCantidad: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaciones = new Negociaciones();

    constructor(){
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor');
    }

    agrega() : void{
        const negociacion = this.crearNegociacion();
        this.negociaciones.agrega(negociacion);
        const negociaciones = this.negociaciones.lista();
        console.log(negociaciones);
        this.limpiarFormulario();
    }

    crearNegociacion() : Negociacion {  // : Negociacion decir el tipo de dato de retorno de forma explicita
        const regexp = /-/g;
        const fecha = this.inputFecha.value.replace(regexp,',');
        const cantidad = parseInt(this.inputCantidad.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacion(
            new Date(fecha),
            cantidad,
            valor,
        );
    }

    limpiarFormulario() : void{
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }
}