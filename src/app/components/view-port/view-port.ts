import { Component, signal, ViewChild } from '@angular/core';
import { SelectorPanel } from "./components/selector-panel/selector-panel";
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'view-port',
  imports: [SelectorPanel, MatSidenavModule, MatButtonModule, MatIconModule, NgClass ],
  templateUrl: './view-port.html',
  styleUrl: './view-port.scss'
})
export class ViewPort {
  @ViewChild('sideNavSelectorPanel')
  selectorPanelElement!: MatSidenav;
  @ViewChild('chevronIconButton') chevronButton!: MatIconButton;
  isOpened = signal<boolean>(this.selectorPanelElement?.opened ?? true);

  ToggleSelectorPanel() {
    this.selectorPanelElement.toggle();
    // this.chevronButton._elementRef.nativeElement.style.animationPlayState = this.chevronButton._elementRef.nativeElement.style.animationPlayState === 'running' ? 'paused' : 'running';
  }
}
