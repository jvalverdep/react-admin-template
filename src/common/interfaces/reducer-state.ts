interface IBaseState {
  loading: boolean;
  error: string | undefined;
}

export interface IObjectState<T> extends IBaseState {
  value: T | undefined;
}

export interface IListState<T> extends IBaseState {
  data: T[];
}

export interface IPaginatedListState<T> extends IListState<T> {
  pagination: {
    total: number;
    pageSize: number;
    currentPage: number;
  };
}
