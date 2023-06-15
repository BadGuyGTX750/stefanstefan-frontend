import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  public buttonText: string = '';

  @Input()
  set text(text: string) {
    this.buttonText = text
  }
  get name(): string {
    return this.buttonText;
  }

  @Input() paddingSide: string = '15px';
  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;

  constructor() {}
}
