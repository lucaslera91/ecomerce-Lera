import React, {useEffect, useState}from 'react'
import Item from './Item';

function ItemList({items, fn}) {

        if(Array.isArray(items)){
            return items.map((item) => <Item key={item.id} item={item} fn={fn}></Item>);
        }else{
            return <h3>Loading...</h3>
        }
   
}
export default ItemList;
