import { Component, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
// Services
import { RecipeService } from "../../services/recipe.service";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.html",
  styleUrls: ["./home-page.css"]
})
export class HomePage implements AfterViewInit {
  @ViewChild('appDrawer', {static: true})
  appDrawer: any;
  constructor(public recipeService: RecipeService) {
  }
  ngAfterViewInit() {}
  onSearch(evt) {
    this.recipeService.filterByTitle(evt.target.value)
  }
  onSelectCategory(categoryValue) {
    this.recipeService.filterByCategory(categoryValue);
  }
  onToggleDrawer() {
    this.appDrawer.toggleDrawer();
  }
}
