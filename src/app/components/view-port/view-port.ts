import { Component, Input, signal, ViewChild } from '@angular/core';
import { SelectionList } from "./components/selection-list/selection-list";
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
interface ViewPortContentObject {
  index: number,
  name: string,
  value: any
}

@Component({
  selector: 'view-port',
  imports: [ MatDividerModule, DragDropModule, MatSidenavModule, MatButtonModule, MatIconModule, SelectionList],
  templateUrl: './view-port.html',
  styleUrl: './view-port.scss'
})
export class ViewPort {
  @ViewChild('sideNavSelectorPanel') selectorPanelElement!: MatSidenav;
  @ViewChild('chevronIconButton') chevronButton!: MatIconButton;
  @Input() ViewPortContentList: ViewPortContentObject[]=[];
  protected sideBarDefaultWidth: string = '300px';
  protected sideBarMinWidth: string = '0px';
  protected defaultSelectionPanelPadding = '1rem 0rem 1rem 1rem'
  selectionPanelPadding = signal<string>(this.defaultSelectionPanelPadding);
  currentSideBarWidth = signal<string>(this.sideBarDefaultWidth);

  ToggleSelectorPanel() {
    let sideBarWidthPx = parseInt(this.currentSideBarWidth())
    if (sideBarWidthPx > 10) {
      this.currentSideBarWidth.set(this.sideBarMinWidth);
      this.selectionPanelPadding.set('1rem 0rem');
    }
    else {
      this.currentSideBarWidth.set('fit-content');
      this.selectionPanelPadding.set(this.defaultSelectionPanelPadding);
    }
  }

  protected onDragMoved(event: CdkDragMove) {
    this.currentSideBarWidth.set(event.pointerPosition.x + 'px');
    const element = event.source.element.nativeElement as HTMLElement;
    element.style.transform = 'none';
    if (parseInt(this.currentSideBarWidth()) < 30) {
      this.currentSideBarWidth.set(this.sideBarMinWidth);
      this.selectionPanelPadding.set('1rem 0rem');
    }
    else {
      this.selectionPanelPadding.set(this.defaultSelectionPanelPadding);
    }
  }
}
