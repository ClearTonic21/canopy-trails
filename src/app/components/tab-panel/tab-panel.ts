import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CdkDragDrop, CdkDragMove, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
class Tab {
  index: number = -1
  name: string = 'tabName'
}

@Component({
  selector: 'tab-panel',
  imports: [ MatTabsModule, DragDropModule ],
  templateUrl: './tab-panel.html',
  styleUrl: './tab-panel.scss'
})
export class TabPanel {
  @Input() tabs: Tab[] = [ 
    {
      index: 1,
      name: 'Tab1'
    },
    {
      index: 2,
      name: 'Tab2'
    },
    {
      index: 3,
      name: 'Tab3'
    },
    {
      index: 4,
      name: 'Tab4'
    },
    {
      index: 5,
      name: 'Tab5'
    },
    {
      index: 6,
      name: 'Tab6'
    },
    {
      index: 7,
      name: 'Tab7'
    },
    {
      index: 8,
      name: 'Tab8'
    },
    {
      index: 9,
      name: 'Tab9'
    },
    {
      index: 10,
      name: 'Tab10'
    },
    {
      index: 11,
      name: 'Tab11'
    },
    {
      index: 12,
      name: 'Tab12'
    },
    {
      index: 13,
      name: 'Tab13'
    },
    {
      index: 14,
      name: 'Tab14'
    },
    {
      index: 15,
      name: 'Tab15'
    },
    {
      index: 16,
      name: 'Tab16'
    },
    {
      index: 17,
      name: 'Tab17'
    },
    {
      index: 18,
      name: 'Tab18'
    },
    {
      index: 19,
      name: 'Tab19'
    },
    {
      index: 20,
      name: 'Tab20'
    },
    {
      index: 21,
      name: 'Tab21'
    },
    {
      index: 22,
      name: 'Tab22'
    },
    {
      index: 23,
      name: 'Tab23'
    }
  ];
  @Input() defaultTabSelection: number = 0;
  @Output() currentTab = signal<number>(this.defaultTabSelection);
  @Output() switchingTabs = new EventEmitter<number>();
  @Input() title: string = '';

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
  }

  switchTabs($event: MatTabChangeEvent) {
    this.currentTab.set($event.index);
    this.switchingTabs.emit(this.currentTab());
    console.log(this.currentTab());
  }
}
