// base queryapam used for get request epecialy list with paginate
export type QueryParamsDto = {
  page: number;
  perPage: number;
  search: string;
  sortBy: string;
  sortOrder: string;
};
