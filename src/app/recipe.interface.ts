export interface Recipe {
  water?: number;
  flour?: number;
  salt?: number;
  breadFlour?: number;
  konsui?: number;
}

export interface UpdatedRecipe {
  prop: string;
  recipe: Recipe;
}

export const ingList = ['water', 'flour', 'salt', 'breadFlour', 'konsui']