import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
  mileage: number | null = null;  // Allow null as a valid type
  maintenanceCost: number | null = null;  // Allow null as a valid type

  constructor(private apiService: ApiService) {}

  predictMaintenance() {
    if (this.mileage === null) {
      alert('Please enter a valid mileage.');
      return;
    }

    this.apiService.predictMaintenance(this.mileage)
      .then(response => this.maintenanceCost = response.maintenance_cost)
      .catch(error => console.error('Error predicting maintenance:', error));
  }
}
