import React, {useEffect, useState}from 'react'
import Item from './Item';

function ItemList({items}) {

        if(Array.isArray(items)){
            return items.map((item) => <Item key={item.id} item={item}></Item>);
        }else{
            return <h3>Loading...</h3>
        }
   
}
export default ItemList;
