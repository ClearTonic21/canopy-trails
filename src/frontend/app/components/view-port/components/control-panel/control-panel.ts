import { Component, Output, signal, ViewChild } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

export class ContextOption {
  id: number = 0;
  name: string = '';
  text: string = '';
}
@Component({
  selector: 'control-panel',
  imports: [ CdkDrag, MatButtonModule, MatButtonToggleModule, MatIconModule, MatTooltipModule, MatMenuModule],
  templateUrl: './control-panel.html',
  styleUrl: './control-panel.scss'
})
export class ControlPanel {
  @ViewChild(MatMenuTrigger) contextMenu!: MatMenuTrigger;
  @Output() editorMode = signal<boolean>(true);
  @Output() viewerMode = signal<boolean>(false);
  lockControlPosition = signal<boolean>(false);

  editorModeTooltip: string = `Switch to Editor Mode [alt + v] Editor Mode is:${this.inEditorMode()}`;
  viewerModeTooltip: string = `Switch to Viewer Mode [alt + v] Viewer Mode is:${this.inViewerMode()}`;

  contextMenuPosition = { x: '0px', y: '0px' };

  contextOptions: ContextOption[] = [{ id: 0, name: 'lock', text: "Lock Control Panel Position"}];

  ngAfterViewInit() {
    console.log(this.contextMenu); // Verify it’s defined
  }

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'option': this.contextOptions[0] };
    this.contextMenu.openMenu();
  }

  onContextMenuAction1(option: ContextOption) {
    this.lockControlPosition.set(!this.lockControlPosition());
  }

  inEditorMode(): string {
    return this.editorMode() ? 'Active' : 'Inactive'
  }

  inViewerMode(): string {
    return this.viewerMode() ? 'Active' : 'Inactive'
  }

  SwitchToEditorMode(): void {
    this.editorMode.set(true);
    this.viewerMode.set(false);
  }

  SwitchToViewerMode(): void {
    this.editorMode.set(false);
    this.viewerMode.set(true);
  }
}