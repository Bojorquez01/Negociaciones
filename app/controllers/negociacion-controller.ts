import { diasSemana } from "../enums/dias-semana.js";
import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from "../models/negociaciones.js";
import { MensajeView } from "../views/mensaje-view.js";
import { NegociacionesView } from "../views/negociaciones-view.js";

export class NegociacionController{
    private inputFecha: HTMLInputElement;
    private inputCantidad: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaciones = new Negociaciones();
    private negociacionesView = new NegociacionesView('#negociaciones-view',true);
    private mensajeView = new MensajeView('#mensaje-view');

    constructor(){
        this.inputFecha = document.querySelector('#fecha') as HTMLInputElement;
        this.inputCantidad = document.querySelector('#cantidad') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacionesView.update(this.negociaciones);
    }

    public agrega() : void{
        const negociacion = Negociacion.crearNegociacion(this.inputFecha.value,this.inputCantidad.value,this.inputValor.value);
        if (!this.esDiaComercial(negociacion.fecha)){
            this.mensajeView.update('Sólo se aceptan negociaciones en días comerciales');
            return;
        }
        this.negociaciones.agrega(negociacion);
        this.actualizaVistas();
        this.limpiarFormulario();
    }

    private esDiaComercial(fecha: Date): boolean{
        return fecha.getDay() > diasSemana.DOMIGO && fecha.getDay() < diasSemana.SABADO
    }

    private limpiarFormulario() : void{
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }

    private actualizaVistas(): void{
        this.negociacionesView.update(this.negociaciones);
        this.mensajeView.update('La negociación fue registrada de forma exitosa');
    }
}