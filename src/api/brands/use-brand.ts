import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { IBrand } from './types';

type Variables = { id: string };
type Response = IBrand;

export const useBrand = createQuery<Response, Variables, AxiosError>({
  queryKey: ['brand'],
  fetcher: (variables) => {
    return client
      .get(`brand/${variables.id}`)
      .then((response) => response.data);
  },
});
