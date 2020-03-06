import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Services
import { RecipeService } from './services/recipe.service';
import { IdbService } from './services/idb.service';
import { RippleDirective } from './directives/ripple.directive';
// Pages
import { HomePageComponent } from './pages/home-page/home-page';
import { EditPageComponent } from './pages/edit-page/edit-page';
import { DetailsPageComponent } from './pages/details-page/details-page';
import { PatternPageComponent } from './pages/pattern-page/pattern-page.component';
// Components
import { AppComponent } from './app.component';
import { RecipeList } from './components/recipe-list/recipe-list.component';
import { RecipeItem } from './components/recipe-item/recipe-item';
import { AppBarComponent } from './components/app-bar/app-bar';
import { ListItemComponent } from './components/list-item/list-item.component';
import { EditList } from './components/edit-list/edit-list.component';
import { NewRecipeDialogComponent } from './components/new-recipe-dialog/new-recipe-dialog';
import { AppSelectComponent } from './components/app-select/app-select.component';
import { AppDrawerComponent } from './components/app-drawer/app-drawer';
// Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';
// Pipoes
import { CategoryName } from './pipes/category-name.pipe';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'edit', component: EditPageComponent },
  { path: 'details', component: DetailsPageComponent },
  {path: 'pattern', component: PatternPageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  declarations: [
    // Pipes
    CategoryName,
    // Directives
    ClickOutsideDirective,
    RippleDirective,
    // Components
    AppComponent,
    AppDrawerComponent,
    RecipeList,
    RecipeItem,
    AppBarComponent,
    ListItemComponent,
    EditList,
    NewRecipeDialogComponent,
    AppSelectComponent,
    // Pages
    HomePageComponent,
    EditPageComponent,
    DetailsPageComponent,
    PatternPageComponent,
  ],
  bootstrap: [AppComponent],
  providers: [RecipeService, IdbService]
})
export class AppModule {}
