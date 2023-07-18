export abstract class View<T> {
    protected elemento:HTMLElement;

    constructor(selector:string) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`No existe ${selector} en el DOM. Por favor validar`);
        }
    }

    protected abstract template(model: T):string;

    public update(model: T):void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}