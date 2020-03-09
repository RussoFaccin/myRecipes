import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  @Input() title: string;
  @Input() entries: string[];
  scopedEntries: any[];
  @Output() changed = new EventEmitter<string[]>();
  ngOnInit() {
    this.scopedEntries = this.entries.map((entry, index) => {
      const entryObj = {
        value: entry
      };

      return entryObj;
    });
  }
  addNew() {
    this.scopedEntries.push({ value: '' });
  }
  onChangeList() {
    const computedEntries: string[] = this.computeEntries(this.scopedEntries);
    this.changed.emit(computedEntries);
  }
  onDeleteItem(itemIndex: number) {
    this.scopedEntries.splice(itemIndex, 1);
    const computedEntries: string[] = this.computeEntries(this.scopedEntries);
    this.changed.emit(computedEntries);
  }
  computeEntries(entries: object[]) {
    const computedEntries: string[] = entries.map((entry: {value: string}, index) => {
      return entry.value;
    });

    return computedEntries;
  }
}
