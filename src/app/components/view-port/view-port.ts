import { Component, Input, signal } from '@angular/core';
import { SelectorPanel } from "./components/selector-panel/selector-panel";
import { ControlPanel } from "./components/control-panel/control-panel";

@Component({
  selector: 'view-port',
  imports: [SelectorPanel, ControlPanel],
  templateUrl: './view-port.html',
  styleUrl: './view-port.scss'
})
export class ViewPort {

}
