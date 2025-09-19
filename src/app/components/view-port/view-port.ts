import { Component, signal, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { ControlPanel } from "./components/control-panel/control-panel";
import { SelectionList } from "./components/selection-list/selection-list";

@Component({
  selector: 'view-port',
  imports: [ NgClass, MatSidenavModule, MatButtonModule, MatIconModule, NgClass, ControlPanel, SelectionList],
  templateUrl: './view-port.html',
  styleUrl: './view-port.scss'
})
export class ViewPort {
  @ViewChild('sideNavSelectorPanel') selectorPanelElement!: MatSidenav;
  @ViewChild('chevronIconButton') chevronButton!: MatIconButton;
  isOpened = signal<boolean>(this.selectorPanelElement?.opened ?? true);

  ToggleSelectorPanel() {
    this.selectorPanelElement.toggle();
    // this.chevronButton._elementRef.nativeElement.style.animationPlayState = this.chevronButton._elementRef.nativeElement.style.animationPlayState === 'running' ? 'paused' : 'running';
  }
}
