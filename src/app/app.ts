import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewHeader } from "./components/overview-header/overview-header";
import { ViewPort } from "./components/view-port/view-port";
import { UnderviewFooter } from "./components/underview-footer/underview-footer";
import { TabPanel } from './components/tab-panel/tab-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OverviewHeader, ViewPort, TabPanel, UnderviewFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly standardTitle = signal<string>('CANOPY TRAILS');
  userTitle = signal<string>('MY CANOPY TRAIL');
}
