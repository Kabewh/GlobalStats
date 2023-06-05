import React, { useState, useEffect, useRef } from 'react';

const OverflowElement = () => {
  const [elementCount, setElementCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Check if the container has overflowed
    const hasOverflowed = container.scrollHeight > container.clientHeight;

    // If the container has not overflowed, add another element
    if (!hasOverflowed) {
      setElementCount(prevCount => prevCount + 1);
    }
  }, [elementCount]);

  return (
    <div ref={containerRef}>
      {Array.from({ length: elementCount }).map((_, index) => (
        <div key={index}>Overflowing element</div>
      ))}
    </div>
  );
};

export default OverflowElement;
