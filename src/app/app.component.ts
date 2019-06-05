import { Component } from '@angular/core';
import { Recipe, UpdatedRecipe, ingList } from './recipe.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  originalRecipe: Recipe = {
    water: 0,
    flour: 0,
    salt: 0,
    breadFlour: 0,
    konsui: 0,
  };

  updatedRecipe: Recipe = { ...this.originalRecipe };

  updatedUpdated(stuff: UpdatedRecipe) {
    this.updatedRecipe = { ...stuff.recipe };
  }

  updateQuantities(stuff: UpdatedRecipe) {
    // const { prop, recipe } = stuff;
    console.log("updating quantities: " + stuff);
    const prop = stuff.prop;
    const recipe = stuff.recipe;
    const newRecipe: Recipe = {
      [prop]: recipe[prop]
    };

    const ingrs = ingList;
    const factor = recipe[prop] / this.originalRecipe[prop];
    // newRecipe['totalWeight'].quantity += recipe[prop].quantity;

    ingrs
      .filter(ing => ing !== prop)
      .forEach(ing => {
          newRecipe[ing] = this.originalRecipe[ing]* factor;
          // newRecipe['totalWeight'] += newRecipe[ing].quantity;
        });

    this.updatedRecipe = { ...newRecipe };
  }
  checkForCamels(ing) {
    // insert a space before all caps
    ing.replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    ing.replace(/^./, function(ing){ return ing.toUpperCase(); })
    return ing;
  }
}

