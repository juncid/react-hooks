import React from 'react';

function ListComponent({dataList}) {
    
    
    return (
        <>
          {dataList.map(({label}) => (
            <p key={label}>{label}</p>
          ))}
        </>
      );
}

export default ListComponent;