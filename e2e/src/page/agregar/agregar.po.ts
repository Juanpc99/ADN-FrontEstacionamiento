import { by, element } from 'protractor';

export class AgregarPage{
    private botonDisponibleEspacio = element(by.id('espacioDisponibleBoton'));
    private inputPlaca = element(by.id('inputPlaca'));
    private inputTipovehiculo = element(by.id('inputTipoVehiculo'));
    private inputModeloVehiculo = element(by.id('inputModeloVehiculo'));
    private inputNombrePropietario = element(by.id('inputNombrePropietario'));
    private inputApellidoPropietario = element(by.id('inputApellidoPropietario'));
    private inputPrecioPorHora = element(by.id('inputPrecioPorHora'));
    private botonAgregar = element(by.id('botonAgregar'));
    private mensajeSuccess = element(by.css('.alert.alert-success'));


    async clickBotonEspacioDisponible(){
        await this.botonDisponibleEspacio.click();
    }
    async agregarPlaca(placa){
        await this.inputPlaca.sendKeys(placa);
    }
    async agregarTipoVehculo(tipoVehiculo){
        await this.inputTipovehiculo.sendKeys(tipoVehiculo);
    }
    async agregarModeloVehiculo(modeloVehiculo){
        await this.inputModeloVehiculo.sendKeys(modeloVehiculo);
    }
    async agregarNombrePropietario(nombrePropietario){
        await this.inputNombrePropietario.sendKeys(nombrePropietario);
    }
    async agregarApellidoPropietario(apellidoPropietario){
        await this.inputApellidoPropietario.sendKeys(apellidoPropietario);
    }
    async agregarPrecioPorHora(precioPorHora){
        await this.inputPrecioPorHora.sendKeys(precioPorHora);
    }
    async clickBotonAgregar(){
        await this.botonAgregar.click();
    }
    async mensaje(){
        await this.mensajeSuccess.getText();
    }
    //#mensajeAgregado
}
