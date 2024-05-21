import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { IBrand } from './types';

type Response = IBrand[];
type Variables = void; // as react-query-kit is strongly typed, we need to specify the type of the variables as void in case we don't need them

export const useBrands = createQuery<Response, Variables, AxiosError>({
  queryKey: ['brands'],
  fetcher: () => {
    return client.get(`brand`).then((response) => response.data.results);
  },
});
