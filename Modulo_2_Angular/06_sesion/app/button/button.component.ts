import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color}">{{label}}</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
 @Input() color!: string;
 @Input() label!: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes->',changes);
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }



}
