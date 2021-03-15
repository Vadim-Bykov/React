import React, { Suspense } from 'react';
import Preloader from '../common/preloader/Preloader';

function WithSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <Suspense fallback={<Preloader />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}

export default WithSuspense;
