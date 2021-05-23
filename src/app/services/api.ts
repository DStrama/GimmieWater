export * from './humidityController.service';
import { HumidityControllerService } from './humidityController.service';
export * from './plantController.service';
import { PlantControllerService } from './plantController.service';
export const APIS = [HumidityControllerService, PlantControllerService];
