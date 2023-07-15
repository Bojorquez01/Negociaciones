import { diasSemana } from "../enums/dias-semana.js";
import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from "../models/negociaciones.js";
import { MensajeView } from "../views/mensaje-view.js";
import { NegociacionesView } from "../views/negociaciones-view.js";
export class NegociacionController {
    constructor() {
        this.negociaciones = new Negociaciones();
        this.negociacionesView = new NegociacionesView('#negociaciones-view', true);
        this.mensajeView = new MensajeView('#mensaje-view');
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor');
        this.negociacionesView.update(this.negociaciones);
    }
    agrega() {
        const negociacion = Negociacion.crearNegociacion(this.inputFecha.value, this.inputCantidad.value, this.inputValor.value);
        if (!this.esDiaComercial(negociacion.fecha)) {
            this.mensajeView.update('Sólo se aceptan negociaciones en días comerciales');
            return;
        }
        this.negociaciones.agrega(negociacion);
        this.actualizaVistas();
        this.limpiarFormulario();
    }
    esDiaComercial(fecha) {
        return fecha.getDay() > diasSemana.DOMIGO && fecha.getDay() < diasSemana.SABADO;
    }
    limpiarFormulario() {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }
    actualizaVistas() {
        this.negociacionesView.update(this.negociaciones);
        this.mensajeView.update('La negociación fue registrada de forma exitosa');
    }
}
