import { BaseRepo, CollectionModel, Model } from '@mars-man/models';
import qs from 'qs';
import { useLocation } from 'react-router';

import * as _ from 'lodash';

export const useQuery = () => {
  return qs.parse(useLocation().search, { ignoreQueryPrefix: true });
};

export const reload = (model: Model, repos: BaseRepo[]) => {
  for (const repo of repos) {
    repo.onLoad.subscribe(() => {
      model.load();
    });
  }
};

export const update = <DataT, BodyT>(
  model: Model<DataT, any, any>,
  repos: BaseRepo<DataT, any> | BaseRepo<DataT, any>[],
  // key?: string
) => {
  const run = (repo: BaseRepo) => {
    repo.onLoad.subscribe(() => {
      model.data = repo.data;
    });
  };
  if (Array.isArray(repos)) {
    for (const repo of repos) {
      run(repo);
    }
  } else {
    run(repos);
  }
};

export const add = <DataT>(
  collection: CollectionModel,
  repo: BaseRepo<DataT>,
) => {
  repo.onLoad.subscribe(() => {
    collection.add(repo.data);
  });
};

export const remove = <DataT>(model: Model, repo: BaseRepo<DataT>) => {
  repo.onLoad.subscribe(() => {
    model.remove();
  });
};