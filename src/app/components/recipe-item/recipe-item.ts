import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
// Models
import { Categories, Recipe } from "../../models/recipe.model";
// Service
import { RecipeService } from "../../services/recipe.service";

@Component({
  selector: "recipe-item",
  templateUrl: "./recipe-item.html",
  styleUrls: ["./recipe-item.css"]
})
export class RecipeItem {
  @Input() recipe: any;
  @Input() index: number;
  constructor(private recipeService: RecipeService, private router: Router) {}
  selectAndNavigate(recipe: Recipe, path: string) {
    this.recipeService.selectedRecipe = recipe;
    this.router.navigate([path]);
  }
  deleteRecipe(recipeIndex: number, evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.recipeService.deleteRecipe(recipeIndex)
    .then((result) => {});
  }
}
