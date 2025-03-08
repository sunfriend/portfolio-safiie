import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerMode, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [MatMenuModule, MatButtonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, HamburgerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  mode: MatDrawerMode = 'side';
  menuOpen: boolean = false;
  @ViewChild('drawer') drawer!: MatSidenav;
  
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
      this.mode = result.matches ? 'over' : 'side';
      if (result.matches && this.drawer && this.drawer.opened) {
        this.drawer.close();  // Ensure it's closed on smaller screens
      }
    });
  }

  closeSidenav(drawer: any) {
    drawer.close();
  }

  // closeMenu(trigger: any) {
  //   console.log("closed");
  //   trigger.closeMenu();
  // }
  //   openMenu(trigger: any) {
  //   console.log("opened");
  //   trigger.openMenu();
  // }

  timedOutCloser: any;
  openMenuTrigger: any; // Track currently open menu
  
  mouseEnter(trigger: any) {
    // Close any previously open menu
    if (this.openMenuTrigger && this.openMenuTrigger !== trigger) {
      this.openMenuTrigger.closeMenu();
    }
  
    // Prevent closing and open the new one
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser);
    }
    trigger.openMenu();
    this.openMenuTrigger = trigger; // Store the currently open menu
  }
  
  mouseLeave(trigger: any) {
    this.timedOutCloser = setTimeout(() => {
      if (this.openMenuTrigger === trigger) {
        trigger.closeMenu();
        this.openMenuTrigger = null; // Reset tracking when closed
      }
    }, 300);
  }
  

}
