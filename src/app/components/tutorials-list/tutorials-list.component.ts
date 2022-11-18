import { Component, OnInit, Output } from '@angular/core';
import { Gateway } from 'src/app/models/gateway.model';
import { GatewayService } from 'src/app/services/gateway.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit {
  gateways?: Gateway[];
  currentTutorial: Gateway = {};

  currentIndex = -1;
  title = '';

  constructor(private gatewayService: GatewayService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.gatewayService.getAll().subscribe({
      next: (data) => {
        this.gateways = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Gateway, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;

    console.log('currentGateway', this.currentTutorial);
    console.log('currentIndex', this.currentIndex);
  }

  removeAllTutorials(): void {
    this.gatewayService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.gatewayService.findByName(this.title).subscribe({
      next: (data) => {
        this.gateways = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
