import { Pipe, PipeTransform } from '@angular/core';
// Models
import { Categories, Recipe } from '../models/recipe.model';

@Pipe({name: 'categoryName'})
export class CategoryName implements PipeTransform {
  transform(value: number) {
    return Categories[value];
  }
}