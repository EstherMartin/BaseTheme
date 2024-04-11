import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'base-body',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './base-body.component.html',
  styleUrls: ['./base-body.component.scss']
})
export class BaseBodyComponent {
  
}