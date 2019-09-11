import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

interface Entry {
  value: number;
  label: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrls: ['app-select.component.css']
})
export class AppSelectComponent implements OnInit {
  computedEntries: Entry[] = [];
  placeholder: string = 'Select';
  opened: boolean = false;
  @Input() entries: string[];
  @Input() selectedId: number= 0;
  @Output() changed: EventEmitter<Entry> = new EventEmitter();
  ngOnInit() {
    this.placeholder = this.entries[this.selectedId];
    this.computedEntries = this.computeEntries(this.entries);
  }
  computeEntries(entries: string[]) {
    let localEntries: any = [];

    this.entries.forEach((entry, index) => {
      let entryObj = {
        value: index,
        label: entry
      };

      localEntries.push(entryObj);
    });

    return localEntries;
  }
  toggleOptions() {
    this.opened = ! this.opened;
  }
  openOptions() {
    this.opened = true;
  }
  closeOptions() {
    this.opened = false;
  }
  selectOption(selected: Entry) {
    this.changed.emit(selected);
    this.placeholder = selected.label;
    this.closeOptions();
  }
}