import styles from './ErrorMessage.module.css'
const ErrorMessage =({items}) =>{
  return <>
  
  {items.length === 0 && <h1 className={`${styles.errormessage} errormessage`}  >Cart is empty. <br></br> please add some food</h1>}

  </>
}

export default ErrorMessage;