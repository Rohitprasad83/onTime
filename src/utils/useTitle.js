import { useEffect } from 'react';

function useTitle(msg) {
  useEffect(() => {
    document.title = `onTime  ${msg}`;
  }, [msg]);
}
export { useTitle };
