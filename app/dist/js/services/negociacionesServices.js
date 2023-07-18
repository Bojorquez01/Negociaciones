import { Negociacion } from "../models/negociacion.js";
export class NegociacionesServices {
    obtenerNegociacionesAPI() {
        return fetch('http://localhost:8080/datos').then(res => res.json()).then((datos) => {
            return datos.map((operacion) => {
                return new Negociacion(new Date, operacion.veces, operacion.monto);
            });
        });
    }
}
//# sourceMappingURL=negociacionesServices.js.map