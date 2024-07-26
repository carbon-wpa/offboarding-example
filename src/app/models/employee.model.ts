export interface EmployeeModel {
  id: string;
  name: string;
  department: string;
  status: EmployeeStatus;
  email: string;
  equipments: EmployeeEquipmentModel[];
}

export interface EmployeeEquipmentModel {
  id: string;
  name: string;
}

export  enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}
