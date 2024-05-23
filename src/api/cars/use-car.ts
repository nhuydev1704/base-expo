import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { ICarDetail } from './car.detail.types';

type Variables = { id: string };
type Response = ICarDetail;

export const useCar = createQuery<Response, Variables, AxiosError>({
  queryKey: ['car'],
  fetcher: (variables) => {
    return client.get(`car/${variables.id}`).then((response) => response.data);
  },
});
