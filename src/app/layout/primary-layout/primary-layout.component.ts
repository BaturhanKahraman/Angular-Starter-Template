import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrls: ['./primary-layout.component.scss']
})
export class PrimaryLayoutComponent implements OnInit {

  ngOnInit(): void {
  }
  currentScreenSize!: string;
  isSmallScreen!:boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe("")
      .subscribe(()=>
        this.isSmallScreen=breakpointObserver.isMatched("(max-width: 1279.98px)")
      );
  }
}
