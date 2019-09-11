import { Component, Input, OnInit } from '@angular/core';
//Models
import { Categories, Recipe } from '../../models/recipe.model';

@Component({
   selector: 'recipe-list',
   templateUrl: './recipe-list.component.html',
   styleUrls: ['./recipe-list.component.css']
})
export class RecipeList {
  @Input() recipes: any[];
  constructor() {}
  ngOnInit() {}
}