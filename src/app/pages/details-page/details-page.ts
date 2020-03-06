import { Component } from '@angular/core';
// Models
import { Categories, Recipe } from '../../models/recipe.model';
// Services
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.html',
  styleUrls: ['./details-page.css']
})
export class DetailsPageComponent {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {
    this.selectedRecipe = this.recipeService.selectedRecipe;
  }
}
