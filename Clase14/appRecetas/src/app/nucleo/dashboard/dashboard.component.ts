import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rango: number = 1
  indicador1: number = 3
  indicador2: number = 1

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakPointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.XSmall
      ])
      .subscribe(
        (data: BreakpointState) => {
          if (data.matches) {
            this.indicador1 = 4
            this.indicador2 = 4
          } else {
            this.indicador1 = 3
            this.indicador2 = 1
          }
        }
      )
  }

}
