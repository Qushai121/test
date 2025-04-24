export type ListResponseDto<T> = {
  data: T[];
  message: string;
  totalRecord: number;
};
