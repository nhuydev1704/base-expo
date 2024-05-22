import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { IHome } from './types';

type Response = IHome[];
type Variables = void; // as react-query-kit is strongly typed, we need to specify the type of the variables as void in case we don't need them

export const useHome = createQuery<Response, Variables, AxiosError>({
  queryKey: ['home'],
  fetcher: () => {
    return client.get(`home`).then((response) => response.data);
  },
  staleTime: Infinity,
});
