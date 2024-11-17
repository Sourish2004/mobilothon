import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
})
export class PreferencesComponent {
  // Define preferences object
  preferences = {
    seatPosition: '',
    temperature: null,
    drivingMode: '',
    mileage: null
  };

  constructor(private http: HttpClient) {}

  // Function to handle form submission
  savePreferences() {
    const preferencesData = this.preferences;  // Data to send to the backend

    // Send preferences to the backend (API)
    this.http.post('http://localhost:3000/api/preferences', preferencesData)
      .subscribe(
        (response) => {
          console.log('Preferences saved:', response);
          alert('Preferences saved successfully!');
        },
        (error) => {
          console.error('Error saving preferences:', error);
          alert('Failed to save preferences.');
        }
      );
  }
}
