import { useEffect, useRef, useState } from 'react';

const UseNearScreen = () => {
  const element = useRef(null); // To detect if element is in user viewport
  const [show, setShow] = useState(false);

  return [show, element];
};

export default UseNearScreen;
