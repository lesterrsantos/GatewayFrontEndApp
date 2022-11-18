import { Component } from '@angular/core';
import { Gateway } from 'src/app/models/gateway.model';
import { GatewayService } from 'src/app/services/gateway.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent {
  tutorial: Gateway = {
    _id: '',
    serialNumber: '',
    humanReadableName: '',
    ipv4Address: '',
    peripheralDevices: [],
  };
  submitted = false;

  constructor(private tutorialService: GatewayService) {}

  saveTutorial(): void {
    const data = {
      serialNumber: this.tutorial.serialNumber,
      humanReadableName: this.tutorial.humanReadableName,
      ipv4Address: this.tutorial.ipv4Address,
      peripheralDevices: this.tutorial.peripheralDevices,

      // title: this.tutorial.title,
      // description: this.tutorial.description,
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      _id: '',
      serialNumber: '',
      humanReadableName: '',
      ipv4Address: '',
      peripheralDevices: [],
    };
  }
}
