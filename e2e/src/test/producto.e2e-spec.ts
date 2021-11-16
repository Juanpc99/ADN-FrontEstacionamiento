
import { AgregarPage } from '../page/agregar/agregar.po';
import { BusacarVehiculoPage } from '../page/vehiculos/buscarVehiculos.po';
import { SidebarPage } from '../page/sidebar/sidebar.po';
import { SacarVehiculoPage } from '../page/sacar/sacar.po';
describe('workspace-project Producto', () => {
    let agregar: AgregarPage;
    let buscarVehiculos: BusacarVehiculoPage;
    let sidebar : SidebarPage;
    let sacar: SacarVehiculoPage;

    beforeEach(() => {
        agregar = new AgregarPage();
        buscarVehiculos = new BusacarVehiculoPage();
        sidebar = new SidebarPage();
        sacar = new SacarVehiculoPage();
    });

    it('deberia agregar un producto', () =>{
        agregar.clickBotonEspacioDisponible();
        agregar.agregarPlaca('ASD599');
        agregar.agregarTipoVehculo('fdsfsd');
        agregar.agregarModeloVehiculo('fsdfs');
        agregar.agregarNombrePropietario('dsfsdf');
        agregar.agregarApellidoPropietario('sdfsd');
        agregar.agregarPrecioPorHora(15000);
        agregar.clickBotonAgregar();
        expect(agregar.mensaje()).toBe('Agregado');
    });
    it('deberia listar vehiculos', () =>{
        sidebar.clickBotonVehiculo();
        buscarVehiculos.buscarVehiculo('A');

        expect(buscarVehiculos.listarVehiculos()).toBe(3);
    })
    it('deberia sacar un vehiculo', () =>{
    
        sacar.clickBotonOcupado();
        sacar.clickBotonPagar();
        sacar.mensajeElminoCorrectamente();
        expect(sacar.mensajeElminoCorrectamente()).toBe('Pagó correctamente');
    })
});
