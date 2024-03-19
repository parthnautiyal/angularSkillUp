export interface APIResponse<T> {
  data: T;
  isLoading: boolean;
  error: string;
}
