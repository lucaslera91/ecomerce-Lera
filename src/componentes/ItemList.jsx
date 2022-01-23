import Item from './Item';

function ItemList({items, fn, text}) {
        if(items.length > 0){
            return items.map((item) => <Item text={text} key={item.id} item={item} fn={fn}></Item>);
        }else{
            return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>)
        }
}
export default ItemList;
