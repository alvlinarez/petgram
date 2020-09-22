import { useEffect, useRef, useState } from 'react';

const UseNearScreen = () => {
  const element = useRef(null); // To detect if element is in user viewport
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function windowIntersection() {
      try {
        window.IntersectionObserver =
          (await typeof window.IntersectionObserver) !== 'undefined'
            ? window.IntersectionObserver
            : import('intersection-observer');
      } catch (e) {
        throw new Error(e);
      }
    }
    windowIntersection();
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  return [show, element];
};

export default UseNearScreen;
