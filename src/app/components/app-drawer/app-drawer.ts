import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Categories } from '../../models/recipe.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './app-drawer.html',
  styleUrls: ['./app-drawer.css']
})
export class AppDrawerComponent implements OnInit, AfterViewInit {
  @ViewChild('drawerOverlay', {static: true})
  drawerOverlay: any;
  @Input() opened: boolean;
  @Output() selected = new EventEmitter<number>();
  categories: any[];
  openClass = '';
  ngOnInit() {
    const computedCategories = [];

    for (const entry in Categories) {
      if (!isNaN(Number(entry) * 1)) {
        const entryObj = {
          value: entry,
          label: Categories[entry]
        };

        computedCategories.push(entryObj);
      }
    }
    this.categories = computedCategories;
  }
  ngAfterViewInit() {}
  onSelectCategory(category) {
    if (category) {
      this.selected.emit(category.value);
    } else {
      this.selected.emit(null);
    }

    this.opened = false;
  }
  toggleDrawer() {
    this.opened = !this.opened;
  }
  closeDrawer(evt) {
    if (evt.srcElement.querySelector('.m-appDrawer__content')) {
      this.opened = false;
    }
  }
  openDrawer() {
    this.opened = true;
  }
}
