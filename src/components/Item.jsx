
import styles from './Item.module.css'
const Item = ({items , handleBuyButton})=>{

  return <>
  
  <li className="list-group-item kggroup">
    <span>{items}</span>
    <button className={styles.button}
    
    onClick={handleBuyButton}
    
    >Buy</button>
    
   </li>
   
</>
}
export default Item;