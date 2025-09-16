import { Component, Input, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

class Tab {
  name: string = 'tabName'
}

@Component({
  selector: 'tab-panel',
  imports: [MatTabsModule],
  templateUrl: './tab-panel.html',
  styleUrl: './tab-panel.scss'
})
export class TabPanel {
  @Input() tabs: Tab[] = [];
}
