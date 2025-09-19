import { Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'overview-header',
  imports: [ MatIconModule, MatToolbarModule, MatButtonModule, MatButtonToggleModule, MatTooltipModule ],
  templateUrl: './overview-header.html',
  styleUrl: './overview-header.scss'
})
export class OverviewHeader {
  @Input() userTitle = signal<string>( 'User Title' );
}
