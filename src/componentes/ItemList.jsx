import Item from './Item';

function ItemList({items, fn, text}) {
    return(<>
        {(items.length > 0) && items.map((item) => <Item text={text} key={item.id} item={item} fn={fn}></Item>)}
        {!(items.length > 0) && (<div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>)}
        </>
        )    
}

export default ItemList;
