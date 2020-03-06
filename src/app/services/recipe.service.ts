import { Injectable } from '@angular/core';
// Models
import { Categories, Recipe } from '../models/recipe.model';
import { IdbService } from './idb.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe: Recipe;
  recipes: any = [];
  filteredRecipes: any[];
  constructor(private idb: IdbService) {
    this.idb.getData(). then((data) => {
      this.recipes = data;
      this.filteredRecipes = this.recipes;
    });
  }
  addRecipe(recipe: Recipe) {
    this.idb.addRecipe(recipe)
    .then((recipeId: number) => {
      recipe.id = recipeId;

      const recipeIndex = this.recipes.findIndex((item, index) => {
        return item.id === recipe.id;
      });

      if (recipeIndex === -1) {
        this.recipes.push(recipe);
      } else {
        this.recipes.splice(recipeIndex, 1, recipe);
      }
    });
  }
  deleteRecipe(recipeIndex: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.idb.deleteRecipe(recipeIndex).then((status) => {
        if (status) {
          const index = this.recipes.findIndex((recipe) => {
            return recipe.id === recipeIndex;
          });
          this.recipes.splice(index, 1);
          this.filteredRecipes = this.recipes;
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  }
  filterByTitle(title: string) {
    const searchRecipes = this.recipes.filter((recipe, index) => {
      return recipe.title.indexOf(title) >= 0;
    });

    this.filteredRecipes = searchRecipes;
  }
  filterByCategory(categoryValue: number) {
    this.filteredRecipes = this.recipes.filter((recipe, index) => {
      return Number(recipe.category) === Number(categoryValue);
    });

    if (categoryValue == null) {
      this.filteredRecipes = this.recipes;
    }
  }
}
