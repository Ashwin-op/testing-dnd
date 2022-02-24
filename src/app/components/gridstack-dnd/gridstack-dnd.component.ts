import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GridStack } from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';

@Component({
  selector: 'app-gridstack-dnd',
  templateUrl: './gridstack-dnd.component.html',
  styleUrls: ['./gridstack-dnd.component.scss'],
})
export class GridstackDndComponent implements OnInit, AfterViewInit {
  sub1 = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ];
  sub2 = [
    { x: 0, y: 0 },
    { x: 0, y: 1, w: 2 },
  ];
  count = 0;

  // create and load it all from JSON above
  grid!: GridStack;

  subOptions = {
    cellHeight: 50,
    column: 'auto', // size to match container. make sure to include gridstack-extra.min.css
    itemClass: 'sub', // style sub items differently and use to prevent dragging in/out
    acceptWidgets: '.grid-stack-item.sub', // only pink sub items can be inserted
    margin: 2,
    minRow: 1, // don't collapse when empty
  };

  options = {
    // main grid options
    cellHeight: 50,
    margin: 5,
    minRow: 2, // don't collapse when empty
    acceptWidgets: true,
    id: 'main',
    children: [
      { y: 0, content: 'regular item' },
      {
        x: 1,
        w: 4,
        h: 4,
        content: 'nested 1 - can drag items out',
        subGrid: {
          children: this.sub1,
          dragOut: true,
          class: 'sub1',
          ...this.subOptions,
        },
      },
      {
        x: 5,
        w: 4,
        h: 4,
        content: 'nested 2 - constrained to parent (JQ only)',
        subGrid: { children: this.sub2, class: 'sub2', ...this.subOptions },
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.grid = GridStack.addGrid(
      <HTMLElement>document.querySelector('.container-fluid'),
      // @ts-ignore
      this.options
    );
  }

  addNested() {
    this.grid.addWidget({ x: 0, y: 100, content: 'new item' });
  }

  addNewWidget(selector: any) {
    let subGrid = document.querySelector(selector).gridstack;
    let node = {
      x: Math.round(6 * Math.random()),
      y: Math.round(5 * Math.random()),
      w: Math.round(1 + 1 * Math.random()),
      h: Math.round(1 + 1 * Math.random()),
      content: String(this.count++),
    };
    subGrid.addWidget(node);
    return false;
  }
}
