import styles from './FoodInput.module.css'

function FoodInput({handlekeyDown})
{
  return <input className={styles.FoodInput} type="text" placeholder="Enter Your Food Name"
  onKeyDown={handlekeyDown}

 />
}

export default FoodInput;
