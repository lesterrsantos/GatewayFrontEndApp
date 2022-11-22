import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.css'],
})
export class AddGatewayComponent implements OnInit {
  title = 'FormArray';

  reactform = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}
}
