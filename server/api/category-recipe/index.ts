import { getCategoryRecipeListDummyData } from "~/dummy/getCategoryRecipeListDummyData";

export default defineEventHandler(async (event) => {
  return getCategoryRecipeListDummyData;
});
