import React from 'react';

const active={
    color:'white',
    backgroundColor:'black'
}
const ProductSize = ({item,updateSize}) => {
    console.log("ProductSize")


    return (

        <input type="button" value={item.name} style={item.status ? active:{}} onClick={ () => updateSize(item)} />

    );
}

export default React.memo(ProductSize);
