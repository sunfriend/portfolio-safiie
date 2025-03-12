import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class MenuItemComponent implements AfterViewInit {
  @Input() label: string = '';
  @Input() link: string = '';
  @Input() dropdownItems: { label: string; link: string }[] = [];

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  isMenuOpen = false;

  ngAfterViewInit() {
    this.menuTrigger.menuOpened.subscribe(() => {
      this.isMenuOpen = true;
    });

    this.menuTrigger.menuClosed.subscribe(() => {
      this.isMenuOpen = false;
    });
  }
}
