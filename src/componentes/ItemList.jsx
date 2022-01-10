import React, {useEffect, useState}from 'react'
import Item from './Item';

function ItemList({items, fn, text}) {
   
     console.log(items)

        if(items.length > 0){
            return items.map((item) => <Item text={text} key={item.id} item={item} fn={fn}></Item>);
        }else{
            return <h3>Loading...</h3>
        }
}
export default ItemList;
