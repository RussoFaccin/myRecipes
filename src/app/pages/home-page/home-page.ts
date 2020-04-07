import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { RecipeService } from '../../services/recipe.service';
//Models
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('appDrawer', {static: true})
  appDrawer: any;
  constructor(public recipeService: RecipeService, private router: Router) {
  }
  ngAfterViewInit() {}
  onSearch(evt) {
    this.recipeService.filterByTitle(evt.target.value);
  }
  onSelectCategory(categoryValue) {
    this.recipeService.filterByCategory(categoryValue);
  }
  onToggleDrawer() {
    this.appDrawer.toggleDrawer();
  }
  onAddRecipe() {
    this.recipeService.selectedRecipe = null;
    this.router.navigate(['edit']);
  }
}
