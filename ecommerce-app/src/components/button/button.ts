import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'button';
  @Input() color: string = 'btn-primary';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
