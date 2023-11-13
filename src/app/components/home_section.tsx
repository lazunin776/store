import classes from '../Scss/home.module.scss'
const home_section = () => {
 
  const arr = [
     1, 'hello', 3, 4, 5, 6, 7, 8, 9, 10
  ] 

  return (
    <div className={classes.main_container}>
      <div className={classes.ui_component}>
        <ul>
         {arr?.map((element, index) => <li key={index}>
             {element}
         </li>)}
        </ul>
      </div> 
    </div>
  )
}

export default home_section