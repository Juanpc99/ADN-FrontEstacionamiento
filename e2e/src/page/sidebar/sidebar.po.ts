import { by, element } from "protractor";

export class SidebarPage {
    linkEspacio = element(by.id('rutaEspacio'));
    linkVehiculo = element(by.id('rutaVehiculos'));

    async clickBotonVehiculo(){
        await this.linkVehiculo.click();
    }
}