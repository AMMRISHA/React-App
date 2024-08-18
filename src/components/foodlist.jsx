
import Item from "./Item";
const Foodlist =({items})=>{

 
return <ul className="list-group">
          {items.map(items=> 
            <Item key={items} 
            items={items}
            handleBuyButton={()=> alert(`${items} Added`)}
            ></Item>
          
          )}

    </ul>
}

export default Foodlist;