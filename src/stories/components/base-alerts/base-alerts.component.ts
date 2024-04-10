import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'base-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-alerts.component.html',
  styleUrls: ['./base-alerts.component.scss'],
})
export class BaseAlertsComponent {
  @Input() type: 'info' | 'alert' | 'error' | 'sucess' = 'sucess';
  @Input() disable = false;
  @Input() title = 'Titulo alerta'
  @Input() message = 'Mensaje';
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.disable ? '--disable' : '--enable';
    return ['base-alert', `base-alert--}`, mode];
  }
}
