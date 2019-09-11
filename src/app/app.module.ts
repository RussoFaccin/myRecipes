import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// Services
import { RecipeService } from "./services/recipe.service";
import { IdbService } from './services/idb.service';
import { RippleDirective } from './directives/ripple.directive';
// Pages
import { HomePage } from "./pages/home-page/home-page";
import { EditPage } from "./pages/edit-page/edit-page";
import { DetailsPage } from './pages/details-page/details-page';
import { PatternPageComponent } from './pages/pattern-page/pattern-page.component';
// Components
import { AppComponent } from "./app.component";
import { RecipeList } from "./components/recipe-list/recipe-list.component";
import { RecipeItem } from "./components/recipe-item/recipe-item";
import { AppBar } from "./components/app-bar/app-bar";
import { ListItemComponent } from './components/list-item/list-item.component';
import { EditList } from './components/edit-list/edit-list.component';
import { NewRecipeDialog } from './components/new-recipe-dialog/new-recipe-dialog';
import { AppSelectComponent } from './components/app-select/app-select.component';
import { AppDrawerComponent } from './components/app-drawer/app-drawer';
// Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';
// Pipoes
import { CategoryName } from './pipes/category-name.pipe';

const appRoutes: Routes = [
  { path: "", component: HomePage },
  { path: "edit", component: EditPage },
  { path: "details", component: DetailsPage },
  {path: "pattern", component: PatternPageComponent}
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
    AppBar,
    ListItemComponent,
    EditList,
    NewRecipeDialog,
    AppSelectComponent,
    // Pages
    HomePage,
    EditPage,
    DetailsPage,
    PatternPageComponent,
  ],
  bootstrap: [AppComponent],
  providers: [RecipeService, IdbService]
})
export class AppModule {}
