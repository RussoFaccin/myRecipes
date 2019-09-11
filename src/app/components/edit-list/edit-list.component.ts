import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "edit-list",
  templateUrl: "./edit-list.component.html",
  styleUrls: ["./edit-list.component.css"]
})
export class EditList implements OnInit {
  @Input() title: string;
  @Input() entries: string[];
  scopedEntries: object[];
  @Output() changed = new EventEmitter<string[]>();
  ngOnInit() {
    this.scopedEntries = this.entries.map((entry, index) => {
      let entryObj = {
        value: entry
      };

      return entryObj;
    });
  }
  addNew() {
    this.scopedEntries.push({ value: "" });
  }
  onChangeList() {
    let computedEntries: string[] = this.computeEntries(this.scopedEntries);
    this.changed.emit(computedEntries);
  }
  onDeleteItem(itemIndex: number) {
    this.scopedEntries.splice(itemIndex, 1);
    let computedEntries: string[] = this.computeEntries(this.scopedEntries);
    this.changed.emit(computedEntries);
  }
  computeEntries(entries: object[]) {
    let computedEntries: string[] = entries.map((entry: {value: string}, index) => {
      return entry.value;
    });

    return computedEntries;
  }
}
