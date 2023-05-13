import React from 'react';
import FunctionView from './FunctionView';

const List = () => {
  const listData = ['Item 1', 'Item 2' , 'Item 3' , 'Item 4'];

  return (
    <div>
      <h1>List View Example</h1>
      <FunctionView items={listData} />
    </div>
  );
};

export default List;
