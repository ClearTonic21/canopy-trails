import { Component, signal, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { SelectionList } from "./components/selection-list/selection-list";
import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'view-port',
  imports: [ MatDividerModule, DragDropModule, NgClass, MatSidenavModule, MatButtonModule, MatIconModule, NgClass, SelectionList],
  templateUrl: './view-port.html',
  styleUrl: './view-port.scss'
})
export class ViewPort {
  @ViewChild('sideNavSelectorPanel') selectorPanelElement!: MatSidenav;
  @ViewChild('chevronIconButton') chevronButton!: MatIconButton;
  protected sideBarDefaultWidth: string = '300px';
  protected sideBarMinWidth: string = '50px';
  protected currentSideBarWidth = signal<string>(this.sideBarDefaultWidth);
  isOpened = signal<boolean>(this.selectorPanelElement?.opened ?? true);

  ToggleSelectorPanel() {
    this.selectorPanelElement.toggle();
    // this.chevronButton._elementRef.nativeElement.style.animationPlayState = this.chevronButton._elementRef.nativeElement.style.animationPlayState === 'running' ? 'paused' : 'running';
  }

  protected onDragMoved(event: CdkDragMove) {
    this.currentSideBarWidth.set(event.pointerPosition.x + 'px');
    const element = event.source.element.nativeElement as HTMLElement;
    element.style.transform = 'none';
  }
}
