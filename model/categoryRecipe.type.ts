import type { Recipe } from "./recipe.type";

export type CategoryRecipe = {
  id: string;
  name: string;
  icon: string;
  colorScheme: string;
  //   Category Recipe has many recipe
  recipes: Recipe[];
};
