/* eslint-disable no-unused-vars */

import React from 'react';

export default function useDebounce(defaultValue) {
  const [debounce, setDebounce] = React.useState(null);
  const [_timeout, _setTimeout] = React.useState(null);

  React.useEffect(() => {
    const later = () => {
      setDebounce(defaultValue);
    };
    if (_timeout) {
      clearTimeout(_timeout);
    }
    const timeId = setTimeout(later, 200);
    _setTimeout(timeId);
  }, [defaultValue]);

  return debounce;
}
