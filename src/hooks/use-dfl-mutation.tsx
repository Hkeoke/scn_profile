"use client";
import { useState } from "react";

interface UseServerMutationOptions<TData, TResponse = unknown, TError = Error> {
  action: (data: TData) => Promise<TResponse>;
  onSuccess?: (data: TResponse) => void;
  onError?: (error: TError) => void;
}

interface MutationState<TResponse, TError> {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: TResponse | null;
  error: TError | null;
}

export function useDflMutation<TData, TResponse = unknown, TError = Error>({
  action,
  onSuccess,
  onError,
}: UseServerMutationOptions<TData, TResponse, TError>) {
  const [state, setState] = useState<MutationState<TResponse, TError>>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: null,
    error: null,
  });

  const mutateAsync = async (params: TData): Promise<TResponse> => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      isError: false,
      error: null,
    }));

    try {
      const result = await action(params);

      setState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: result,
        error: null,
      });

      onSuccess?.(result);
      return result;
    } catch (error) {
      const typedError = error as TError;

      setState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        data: null,
        error: typedError,
      });

      onError?.(typedError);
      throw typedError;
    }
  };

  const mutate = (params: TData): void => {
    mutateAsync(params).catch(() => {});
  };

  return {
    mutateAsync,
    mutate,
    ...state,
  };
}
