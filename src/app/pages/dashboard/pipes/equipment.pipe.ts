import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeEquipmentModel } from '@models';

@Pipe({
  name: 'equipment',
  standalone: true
})
export class EquipmentPipe implements PipeTransform {

  transform(equipments: EmployeeEquipmentModel[] | undefined): string {
    if(!equipments){
      return '';
    }

    return equipments.map(equipment => equipment.name).join(', ');
  }

}
