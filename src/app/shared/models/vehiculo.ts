export class Vehiculo{
    id: number;
    placa: string;
    idEspacio: number;
    tipoVehiculo: string;
    modeloVehiculo: string;
    nombrePropietario: string;
    apellidoPropietario: string;
    fechaEntrada: string;
    fechaSalida: string;
    totalPagar: number;
    precioBaseHora: number;


    constructor(placa: string, idEspacio: number, tipoVehiculo: string, modeloVehiculo: string,
        nombrePropietario: string, apellidoPropietario: string, fechaEntrada: string, fechaSalida: string,
         precioBaseHora: number){

            
            this.placa = placa;
            this.idEspacio = idEspacio;
            this.tipoVehiculo = tipoVehiculo;
            this.modeloVehiculo = modeloVehiculo;
            this.nombrePropietario = nombrePropietario;
            this.apellidoPropietario = apellidoPropietario;
            this.fechaEntrada = fechaEntrada;
            this.fechaSalida = fechaSalida;
            this.precioBaseHora = precioBaseHora;
        }
        
}