import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe, UpdatedRecipe, ingList } from './recipe.interface';

@Component({
  selector: 'recipe-form',
  template: `
    <div *ngFor="let ing of ingList">
      {{ ing}} <input type="Recipe" (keyup)="setProp(ing)" (change)="setProp(ing)" [(ngModel)]="recipe[ing]" />
    </div>
  `,
  styles: [``]
})
export class RecipeFormComponent {
  ingList = ingList;

  @Input() recipe: Recipe = {
    water: 0,
    flour: 0,
    salt: 0,
    breadFlour: 0,
    konsui: 0,
  };
  @Output() updatedRecipe: EventEmitter<UpdatedRecipe> = new EventEmitter();

  setProp(prop: string) {
    console.log("Test set prop: " + prop)
    if (!this.recipe[prop]) {
      return;
    }
    this.updatedRecipe.emit({
      prop: prop,
      recipe: this.recipe
    });
  }
}
