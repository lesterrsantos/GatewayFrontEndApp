import { Component, Input, OnInit } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gateway } from 'src/app/models/gateway.model';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css'],
})
export class TutorialDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentGateway: Gateway = {
    _id: '',
    serialNumber: '',
    humanReadableName: '',
    ipv4Address: '',
    peripheralDevices: [],
  };

  message = '';

  constructor(
    private tutorialService: GatewayService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.viewMode);
    console.log('currentGateway', this.currentGateway);

    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id).subscribe({
      next: (data) => {
        this.currentGateway = data;
        console.log('data: ', data);
      },
      error: (e) => console.error(e),
    });
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     title: this.currentTutorial.title,
  //     description: this.currentTutorial.description,
  //     published: status,
  //   };

  //   this.message = '';

  //   this.tutorialService.update(this.currentTutorial.id, data).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.currentTutorial.published = status;
  //       this.message = res.message
  //         ? res.message
  //         : 'The status was updated successfully!';
  //     },
  //     error: (e) => console.error(e),
  //   });
  // }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService
      .update(this.currentGateway._id, this.currentGateway)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This gateway was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentGateway._id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/gateways']);
      },
      error: (e) => console.error(e),
    });
  }
}
