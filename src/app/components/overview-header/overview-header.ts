import { Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'overview-header',
  imports: [ MatIconModule, MatToolbarModule, MatButtonModule ],
  templateUrl: './overview-header.html',
  styleUrl: './overview-header.scss'
})
export class OverviewHeader {
  @Input() userTitle = signal<string>( 'User Title' );
}
