import * as React from 'react';

/**
 * run tasks on component first mount
 * @param tasks function/tasks to run
 */
export default function useOnCreated(tasks: () => void) {
  React.useEffect(() => {
    tasks();
  }, []);
}