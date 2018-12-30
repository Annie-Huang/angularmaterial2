import {Component, NgZone, OnInit} from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  // // Don't seem to need this. Looks like angular material or angular have fixed this in version 7,
  // constructor(zone: NgZone) {
  //   this.mediaMatcher.addListener(mql =>
  //     zone.run(() => this.mediaMatcher = mql));
  // }

  constructor() { }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
