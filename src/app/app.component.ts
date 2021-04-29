import { Component } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent {
  expandedElement: any;
  selection = new SelectionModel(true, []);
  public unsortedData = [
    {
      "url": "3452188c-a156-4ee4-b6f9-9d313bdbb148",
      "_id": "3452188c-a156-4ee4-b6f9-9d313bdbb148",
      "part": "wing",
      "main": "boeing",
      "part_id": "3452188c-a156-4ee4-b6f9-9d313bdbb148",
      "information.data_check": "ad1bd2a7-710d-88aa-6da0-8de2140417c6"
    },  
    {
      "url": "3452188c-a156-4ee4-b6f9-9d313bdbb148",
      "_id": "3452188c-a156-4ee4-b6f9-9d313bdbb148",
      "part": "wing",
      "main": "boeing",
      "part_id": "3452188c-a156-4ee4-b6f9-9d313bdbb148",
      "information.data_check": "ad1bd2a7-710d-88aa-6da0-8de2140417c6"
    },
    {
      "url": "ad1bd2a7-710d-88aa-6da0-8de2140417c6",
      "_id": "ad1bd2a7-710d-88aa-6da0-8de2140417c6",
      "part": "wing",
      "main": "boeing",
      "part_id": "ad1bd2a7-710d-88aa-6da0-8de2140417c6",
      "information.data_check": "parent_info"
    },
    {
      "url": "3b42eeee-c7e3-4d75-953e-941351b4e0f9",
      "_id": "3b42eeee-c7e3-4d75-953e-941351b4e0f9",
      "part": "wing",
      "main": "boeing",
      "part_id": "3b42eeee-c7e3-4d75-953e-941351b4e0f9",
      "information.data_check": "3b42eeae-c7e3-4d75-953e-941351b4e0f9"
    },
    {
      "url": "3b42eeae-c7e3-4d75-953e-941351b4e0f9",
      "_id": "3b42eeae-c7e3-4d75-953e-941351b4e0f9",
      "part": "wing",
      "main": "boeing",
      "part_id": "3b42eeae-c7e3-4d75-953e-941351b4e0f9",
      "information.data_check": "parent_info"
    },
    {
      "url": "3b42ee2e-c7e3-4d75-953e-941351b4e0f9",
      "_id": "3b42ee2e-c7e3-4d75-953e-941351b4e0f9",
      "part": "wing",
      "main": "boeing",
      "part_id": "3b42ee2e-c7e3-4d75-953e-941351b4e0f9",
      "information.data_check": "3b42ee3e-c7e3-4d75-953e-941351b4e0f9"
    },    
    {
      "url": "3b42ee3e-c7e3-4d75-953e-941351b4e0f9",
      "_id": "3b42ee3e-c7e3-4d75-953e-941351b4e0f9",
      "part": "wing",
      "main": "boeing",
      "part_id": "3b42ee3e-c7e3-4d75-953e-941351b4e0f9",
      "information.data_check": "parent_info"
    }
  ];
  public data;


  dataSource = new MatTableDataSource([]);
  displayedColumns = ['select', '_id', 'url', 'part', 'part_id', 'main', 'information.data_check'];
  constructor() {
    this.dyna();

    this.displayedColumns = this.displayedColumns;
    this.dataSource = new MatTableDataSource(this.data);
  }

  // this is for converting the normal data into nested form

  public dyna() {
    var t = {};
    this.unsortedData.forEach(o => {
      var parent = o['information.data_check'] === 'parent_info' ? 'single_info' : o['information.data_check'];
      console.log(parent);
      Object.assign(t[o._id] = t[o._id] || {}, o);
      t[parent] = t[parent] || {};
      t[parent].nested = t[parent].nested || [];
      t[parent].nested.push(t[o._id]);
    });
    console.log(JSON.stringify(t.single_info.nested));
    this.data = t.single_info.nested;


  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
      console.log(this.selection);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  getKeys(object): string[] {
    console.log(Object.keys(object));
    return Object.keys(object);
  }

  onItemSelected(idx: number) {
    console.log(idx);
  }

  applyFilter() {

  }
}
