import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
// Models
import { Recipe } from "../../models/recipe.model";
// Services
import { RecipeService } from "../../services/recipe.service";

@Component({
  selector: "app-bar",
  templateUrl: "./app-bar.html",
  styleUrls: ["./app-bar.css"]
})
export class AppBar {
  @Input() isHome: boolean;
  @Output() toggleDrawer = new EventEmitter<void>();
  constructor(private recipeService: RecipeService, private router: Router) {}
  actionAdd() {
    this.recipeService.selectedRecipe = new Recipe(null, "");
    this.router.navigate(["edit"]);
  }
  actionBack() {
    this.router.navigate(["/"]);
  }
  ToggleDrawer() {
    this.toggleDrawer.emit();
  }
}
