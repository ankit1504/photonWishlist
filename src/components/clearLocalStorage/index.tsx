import React, { useEffect } from 'react';

function ClearLocalStorageOnTabClose() {
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  return null;
}

export default ClearLocalStorageOnTabClose;
