import {useCallback, useState} from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCenteredTree = (defaultTranslate = {x: 0, y: 0}) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const {width, height} = containerElem.getBoundingClientRect();
      setTranslate({x: width / 2, y: height / 10});
    }
  }, []);

  return {translate, containerRef};
};
