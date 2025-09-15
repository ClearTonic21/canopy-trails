import { Component, Input, signal } from '@angular/core';
import { SelectorPanel } from "./components/selector-panel/selector-panel";
import { ControlPanel } from "./components/control-panel/control-panel";
import { TabPanel } from "./components/tab-panel/tab-panel";

@Component({
  selector: 'view-port',
  imports: [SelectorPanel, ControlPanel, TabPanel],
  templateUrl: './view-port.html',
  styleUrl: './view-port.scss'
})
export class ViewPort {

}
