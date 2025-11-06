import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
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
  @Input({ required: true }) title: string = 'Canopy Trails';
  @Output() setFavorite = new EventEmitter<boolean>;
  @Output() setAdminPermissions = new EventEmitter<boolean>;
  @Output() setEditorMode = new EventEmitter<boolean>;
  @Output() setViewerMode = new EventEmitter<boolean>;
  @Output() setTitle = new EventEmitter<string>;
  favorited = signal<boolean>(false);
  hasAdminPermissions = signal<boolean>(true);
  editorMode = signal<boolean>(true);
  viewerMode = signal<boolean>(false);

  adminModeTooltip: string = `Indicates if the current user has Admin Permissions: Admin Permissions are${this.displayHasAdminPermissions()} for the current user`;
  editorModeTooltip: string = `Switch to Editor Mode [alt + e] Editor Mode is:${this.displayInEditorMode()}`;
  viewerModeTooltip: string = `Switch to Viewer Mode [alt + v] Viewer Mode is:${this.displayInViewerMode()}`;

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

    console.log(`admin:${this.hasAdminPermissions()}, editor:${this.editorMode()}, viewer:${this.viewerMode()}`)
    this.emitControlMode();
  }

  switchToEditorMode(): void {
    this.editorMode.set(true);
    this.viewerMode.set(false);

    console.log(`admin:${this.hasAdminPermissions()}, editor:${this.editorMode()}, viewer:${this.viewerMode()}`)
    this.emitControlMode();
  }

  switchToViewerMode(): void {
    this.hasAdminPermissions.set(false);
    this.editorMode.set(false);
    this.viewerMode.set(true);
    console.log(`admin:${this.hasAdminPermissions()}, editor:${this.editorMode()}, viewer:${this.viewerMode()}`)
    this.emitControlMode();
  }

  emitControlMode(): void {
    this.setViewerMode.emit(this.viewerMode());
    this.setEditorMode.emit(this.editorMode());
    this.setAdminPermissions.emit(this.hasAdminPermissions());
  }

  onSubmit(): void {
    this.setTitle.emit(this.title);
  }
}
