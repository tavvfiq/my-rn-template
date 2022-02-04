import * as React from 'react';

/**
 * run tasks on component unmount lifecycle (cleanup)
 * @param tasks function/tasks that want to run
 */
export default function useOnDestroy(tasks: () => void) {
  React.useEffect(() => {
    return tasks();
  }, []);
}