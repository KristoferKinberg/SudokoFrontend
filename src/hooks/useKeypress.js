import React from 'react';
import {KEY_DOWN} from "../constants";

export const useKeyPress = (validKeys) => {
  const [keyPressed, setKeyPressed] = React.useState(null)

  const downHandler = ({ key }) => {
    if (validKeys.includes(key)) {
      setKeyPressed(key);
    }
  }

  React.useEffect(() => {
    window.addEventListener(KEY_DOWN, downHandler);
    return () => {
      window.removeEventListener(KEY_DOWN, downHandler);
    };
  }, []);

  return { keyPressed }
}
