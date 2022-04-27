import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() menuButtonClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  MenuButtonClick(){
    this.menuButtonClicked.emit();
  }
}
