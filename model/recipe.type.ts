import type { CategoryRecipe } from "./categoryRecipe.type";

export type Recipe = {
  // kalo mongodb string kalo sql id nya number auto incerement
  id: string | number;
  name: string;
  rating: number;
  maxRatting: number;
  thumbnail: string;
  //   Recipe belongs to CategoryRecipe
  category: CategoryRecipe;
};
