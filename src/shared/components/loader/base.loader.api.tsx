'use client';

import React, { useCallback, useEffect, useState } from 'react';
import BaseLoader from './base.loader';

interface componentProps {
  apiAction: () => Promise<{data: object}>;
  children: React.ReactNode;
  loader: React.ReactNode;
  loading?: boolean;
  success?: (data: object) => void;
}

enum Status {
  Loading,
  Loaded,
  Failed,
}

export default function BaseLoaderApi({
  apiAction,
  children,
  loader,
  loading,
  success
}: componentProps) {
  const [status, setStatus] = useState<Status>(Status.Loading);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = useCallback(() => {
    setStatus(Status.Loading);
    apiAction()
      .then((res: {data: object}) => {
        setStatus(Status.Loaded);
        setLoaded(true);
        if (success) {
          success(res.data);
        }
      })
      .catch((e) => {
        setStatus(Status.Failed);
      });
  }, [apiAction]);

  return (
    <BaseLoader
      loader={loader}
      loading={status === Status.Loading || !!loading}
      loaded={loaded}
      failed={!loaded && status === Status.Failed}
      tryAgainAction={callApi}
    >
      {children}
    </BaseLoader>
  );
}
