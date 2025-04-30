import type { SORT_ORDER } from './sort';

export type PaginationResponse<T> = {
  data: T[];
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type PaginationRequestModel = {
  page?: number;
  pageSize: number;
  orderBy?: string;
  orderDirection?: SORT_ORDER;
  searchKeyword?: string;
};
