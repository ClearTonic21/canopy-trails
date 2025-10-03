import { Component, ElementRef, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'overview-header',
  imports: [ FormsModule, MatMenuModule, MatInputModule, MatIconModule, MatToolbarModule, MatButtonModule, MatButtonToggleModule, MatTooltipModule],
  templateUrl: './overview-header.html',
  styleUrl: './overview-header.scss'
})
export class OverviewHeader {
  @Input({ required: true }) currentTitle: string = '';
  @Output() setTitle = new EventEmitter<string>;
  @Output() setFavorite = new EventEmitter<boolean>;
  @Output() setViewerMode = new EventEmitter<boolean>;
  @Output() setEditorMode = new EventEmitter<boolean>;
  @Output() setAdminPermissions = new EventEmitter<boolean>;
  @ViewChild('titleInput') titleInput!: ElementRef;
  protected readonly standardTitle: string = 'CANOPY TRAILS';
  protected title = signal<string>(this.currentTitle);
  protected favorited = signal<boolean>(false);
  protected viewerMode = signal<boolean>(false);
  protected editorMode = signal<boolean>(true);
  protected hasAdminPermissions = signal<boolean>(true);
  protected adminModeTooltip: string = `Toggle Admin Permissions [alt + p]: Admin Permissions are ${this.displayHasAdminPermissions()}`;
  protected editorModeTooltip: string = `Switch to Editor Mode [alt + e] Editor Mode is: ${this.displayInEditorMode()}`;
  protected viewerModeTooltip: string = `Switch to Viewer Mode [alt + v] Viewer Mode is: ${this.displayInViewerMode()}`;

  displayHasAdminPermissions(): string {
    return this.hasAdminPermissions() ? 'Active' : 'Inactive'
  }

  displayInEditorMode(): string {
    return this.editorMode() ? 'Active' : 'Inactive'
  }

  displayInViewerMode(): string {
    return this.viewerMode() ? 'Active' : 'Inactive'
  }

  toggleFavorite(): void {
    this.favorited.set(!this.favorited());
    this.setFavorite.emit(this.favorited());
  }

  toggleAdminPermissions(): void {
    this.hasAdminPermissions.set(!this.hasAdminPermissions());
    if (this.hasAdminPermissions()) {
      this.switchToEditorMode();
    }
    this.emitControlMode();
  }

  switchToEditorMode(): void {
    this.editorMode.set(true);
    this.viewerMode.set(false);
    this.emitControlMode();
  }

  switchToViewerMode(): void {
    this.hasAdminPermissions.set(false);
    this.editorMode.set(false);
    this.viewerMode.set(true);
    this.emitControlMode();
  }

  emitControlMode(): void {
    this.setViewerMode.emit(this.viewerMode());
    this.setEditorMode.emit(this.editorMode());
    this.setAdminPermissions.emit(this.hasAdminPermissions());
  }

  InputEnterKey(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.UpdateTitle();
    }
  }
  
  UpdateTitle(): void {
    this.titleInput.nativeElement.blur()
    this.title.set(this.currentTitle ? this.currentTitle : this.standardTitle);
    this.setTitle.emit(this.title());
    console.log(`${this.currentTitle}: ${this.title()}`);
  }

  onSubmit() {
    console.log('Submitted value:', this.currentTitle);
  }
}
