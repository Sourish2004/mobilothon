import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private backendUrl = 'http://localhost:5000/api'; // Node.js backend
  private pythonUrl = 'http://localhost:5001';     // Python predictive module

  // Save user preferences
  async savePreferences(preferences: any): Promise<any> {
    try {
      const response = await axios.post(`${this.backendUrl}/preferences`, preferences);
      return response.data;
    } catch (error) {
      console.error('Error saving preferences:', error);
      throw error;
    }
  }

  // Predict maintenance cost
  async predictMaintenance(mileage: number): Promise<any> {
    try {
      const response = await axios.post(`${this.pythonUrl}/predict`, { mileage });
      return response.data;
    } catch (error) {
      console.error('Error predicting maintenance:', error);
      throw error;
    }
  }
}
