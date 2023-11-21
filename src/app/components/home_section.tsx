import classes from '../Scss/home.module.scss'
const home_section = () => {

  const arr = [
    'test', 'test', 'test', 'test', 'test', 'test',
    'test', 'test', 'test', 'test', 'test', 'test',
  ]

  return (
    <div className={classes.main_container}>
      <div className={classes.central_container}>
        <h6>Categories</h6>
        <div className={classes.central_container}>
          <ul>
            {arr?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={classes.preseneter}>
          <h6>Most Popular</h6>
          <div>
            <div>
              {arr.map((item, index) => (
                <div className={classes.cart} key={index}>
                    {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.preseneter}>
          <h6>Most Popular</h6>
          <div>
            <div>
              {arr.map((item, index) => (
                <div className={classes.cart} key={index}>
                    {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home_section