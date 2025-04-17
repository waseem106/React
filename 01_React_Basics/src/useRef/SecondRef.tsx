import React, { useRef } from 'react';

function SecondRef() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listnode = listRef.current;
    const imgNode = listnode.querySelectorAll('li > img')[index];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen p-10 flex flex-col items-center gap-6'>
      <div className='flex gap-4'>
        <button className='p-3 border-2 rounded-md text-black hover:bg-blue-700 w-[7rem] h-[3rem] shadow-lg transition-all' onClick={() => scrollToIndex(0)}>Neo</button>
        <button className='p-3 border-2 rounded-md text-black hover:bg-blue-700 w-[7rem] h-[3rem] shadow-lg transition-all' onClick={() => scrollToIndex(1)}>Millie</button>
        <button className='p-3 border-2 rounded-md text-black hover:bg-blue-700 w-[7rem] h-[3rem] shadow-lg transition-all' onClick={() => scrollToIndex(2)}>Bella</button>
      </div>

      <div className="w-full overflow-x-auto mt-6">
        <ul className='flex gap-6 min-w-[800px]' ref={listRef}>
          <li><img src="https://placecats.com/neo/300/200" alt="Neo" className='rounded-lg' /></li>
          <li><img src="https://placecats.com/millie/200/200" alt="Millie" className='rounded-lg' /></li>
          <li><img src="https://placecats.com/bella/302/200" alt="Bella" className='rounded-lg' /></li>
        </ul>
      </div>
    </div>
  );
}

export default SecondRef;
