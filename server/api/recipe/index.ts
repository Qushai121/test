import { getRecipeListDummyData } from "~/dummy/getRecipeListDummyData";

export default defineEventHandler(async (event) => {
  return getRecipeListDummyData;
});
