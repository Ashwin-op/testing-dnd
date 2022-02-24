import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragula-dnd',
  templateUrl: './dragula-dnd.component.html',
  styleUrls: ['./dragula-dnd.component.scss'],
})
export class DragulaDndComponent implements OnInit {
  groups: Array<any> = [
    {
      name: 'Group A',
      items: [
        { name: 'Item A' },
        { name: 'Item B' },
        { name: 'Item C' },
        { name: 'Item D' },
      ],
    },
    {
      name: 'Group B',
      items: [
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' },
        { name: 'Item 4' },
      ],
    },
    {
      name: 'Group C',
      items: [
        { name: 'Item C1' },
        { name: 'Item C2' },
        { name: 'Item C3' },
        { name: 'Item C4' },
      ],
    },
  ];

  constructor(private dragulaService: DragulaService) {
    this.dragulaService.createGroup('COLUMNS', {
      direction: 'horizontal',
      moves: (el, source, handle) => handle?.className === 'group-handle',
    });
  }

  ngOnInit(): void {}
}
