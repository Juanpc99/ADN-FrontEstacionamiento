import { by, element } from "protractor";

export class BusacarVehiculoPage{

    private inPutBuscarVehiculo = element(by.id('buscadorVehiculo'));
    private listaVehiculos = element(by.id('tablaVehiculosB'));


    async buscarVehiculo(placa){
        await this.inPutBuscarVehiculo.sendKeys(placa);
    }
    async listarVehiculos(){
        await this.listaVehiculos.count();
    }
 }