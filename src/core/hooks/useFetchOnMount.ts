import React, { useEffect } from 'react';
import { TRANSITION_ANIMATION_DURATION } from '~core/navigation/animation';

function useMountHelper() {
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const _listener = setTimeout(() => {
      setMounted(true);
    }, TRANSITION_ANIMATION_DURATION);
    () => clearTimeout(_listener);
  }, []);

  return isMounted;
}

/**
 * run the provided function after transition animation
 * @param fetchFunc callback to call when transition finished
 */
export default function useFetchOnMount(fetchFunc: () => void) {
  const isMounted = useMountHelper();
  useEffect(() => {
    if (isMounted) {
      fetchFunc();
    }
  }, [isMounted]);
}
