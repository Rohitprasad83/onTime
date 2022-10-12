import React from 'react';
import { useTitle } from '../../utils/useTitle';

function Error404() {
  useTitle('| 404');

  return (
    <div>
      <div>
        <div>
          <h2>Error 404, We Couldn't Found what you are Looking For!</h2>
        </div>
      </div>
    </div>
  );
}

export { Error404 };
