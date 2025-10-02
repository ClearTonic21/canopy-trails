import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

interface FoodNode {
  index: number;
  name: string;
  [value: string]: any;
  children?: FoodNode[];
}
@Component({
  selector: 'selection-list',
  imports: [ MatTreeModule, MatIconModule ],
  templateUrl: './selection-list.html',
  styleUrl: './selection-list.scss'
})
export class SelectionList {
  dataSource = EXAMPLE_DATA;
  selectedNode = signal<number>(-1);

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  NodeHasChild(node: FoodNode): boolean {
    return !!node.children && node.children.length > 0 
  }
  
  IsForest(node: FoodNode): boolean {
    let isForest = false;
    for(const child of node.children ?? []) {
      isForest = this.NodeHasChild(child);
    }
    return isForest;
  };

  SelectNode(node: FoodNode): void {
    this.selectedNode.set(node.index);
    console.log(`${node.index}:${this.selectedNode()}`);
  }
}
//      [class.selected]="tree.isExpanded(node)"

const EXAMPLE_DATA: FoodNode[] = [
  {
    index: 0,
    name: 'Fruit',
    children: [{index: 4, name: 'Apple'}, {index: 5, name: 'Banana'}, {index: 6, name: 'Fruit loops'}],
  },
  {
    index: 1,
    name: 'Vegetables',
    children: [
      {
        index: 2,
        name: 'Green',
        children: [
          {index: 7, name: 'Broccoli'},
          { 
            index: 8,
            name: 'Fruit',
            children: [
              {
                index: 2,
                name: 'Green',
                children: [
                  {index: 7, name: 'Broccoli'},
                  { 
                    index: 8,
                    name: 'Fruit',
                    children: [{index: 9, name: 'Apple'}, {index: 10, name: 'Banana'}, {index: 11, name: 'Fruit loops'}],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        index: 3,
        name: 'Orange',
        children: [
          {index: 9, name: 'Pumpkins'},
          {index: 10, name: 'Carrots'}
        ],
      },
    ],
  },
];
