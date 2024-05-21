import { Suspense } from "react";

import { Loader } from "../../components/layout/Loader";

export function LazyPage(Page) {
  return function (props) {
    return (
      <Suspense fallback={<Loader />}>
        <Page {...props} />
      </Suspense>
    );
  };
}
