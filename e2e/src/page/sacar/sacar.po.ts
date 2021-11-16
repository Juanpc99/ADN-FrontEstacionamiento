import { by, element } from "protractor";

export class  SacarVehiculoPage{
    private botonOcupadoEspacio = element(by.id('espacioOcupadoBoton'));
    private botonPagar = element(by.id('pagarEstacionamiento'));
    private mensajeElimino = element(by.id('eliminoCorrectamente'));


    async clickBotonOcupado(){
        await this.botonOcupadoEspacio.click();
    }
    async clickBotonPagar(){
        await this.botonPagar.click;
    }
    async mensajeElminoCorrectamente(){
        await this.mensajeElimino.getText;
    }
}