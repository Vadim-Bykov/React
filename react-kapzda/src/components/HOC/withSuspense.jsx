import React, { Suspense } from 'react';
import Preloader from '../common/preloader/Preloader';

const WithSuspense = (Component) => () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Component />
    </Suspense>
  );
};

export default WithSuspense;