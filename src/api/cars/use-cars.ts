import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { ICar } from './types';

type Response = ICar[];
type Variables = void; // as react-query-kit is strongly typed, we need to specify the type of the variables as void in case we don't need them

export const fetchingCar = async (filter: any) => {
  return client
    .get(`car`, {
      params: filter,
    })
    .then((response) => response.data.results);
};

export const useCars = createQuery<Response, Variables, AxiosError>({
  queryKey: ['cars'],

  fetcher: fetchingCar,
  staleTime: Infinity,
});
