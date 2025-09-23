import { Component, Input, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'overview-header',
  imports: [ MatInputModule, MatIconModule, MatToolbarModule, MatButtonModule, MatButtonToggleModule, MatTooltipModule ],
  templateUrl: './overview-header.html',
  styleUrl: './overview-header.scss'
})
export class OverviewHeader {
  @Input() title: string = 'Canopy Trails';
  @Output() setFavorite = signal<boolean>(false);
  @Output() hasAdminPermissions = signal<boolean>(true);
  @Output() editorMode = signal<boolean>(true);
  @Output() viewerMode = signal<boolean>(false);

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

  ToggleFavorite(): void {
    this.setFavorite.set(!this.setFavorite())
  }

  ToggleAdminPermissions(): void {
    this.hasAdminPermissions.set(!this.hasAdminPermissions());
    if (this.hasAdminPermissions()) {
      this.SwitchToEditorMode();
    }

    console.log(`admin:${this.hasAdminPermissions()}, editor:${this.editorMode()}, viewer:${this.viewerMode()}`)
  }

  SwitchToEditorMode(): void {
    this.editorMode.set(true);
    this.viewerMode.set(false);
    console.log(`admin:${this.hasAdminPermissions()}, editor:${this.editorMode()}, viewer:${this.viewerMode()}`)
  }

  SwitchToViewerMode(): void {
    this.hasAdminPermissions.set(false);
    this.editorMode.set(false);
    this.viewerMode.set(true);
    console.log(`admin:${this.hasAdminPermissions()}, editor:${this.editorMode()}, viewer:${this.viewerMode()}`)
  }
}
