import React, { useEffect, useLayoutEffect, useState } from 'react';

function LayoutVsEffectDemo() {
  const [count, setCount] = useState(0);

  console.log('👷 Render Phase');

  useEffect(() => {
    console.log('🎨 useEffect (After Paint)');
    console.log("time",Date.now())
  }, [count]);

  useLayoutEffect(() => {
    console.log('🏗 useLayoutEffect (Before Paint)');
    console.log("time",Date.now())

  }, [count]);


  return (
    <div className="p-5 text-center">
      <h2 className="text-2xl font-bold">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}

export default LayoutVsEffectDemo;
