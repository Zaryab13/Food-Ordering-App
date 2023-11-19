/* eslint-disable react/prop-types */
import styles from './Card.module.css';

const Card = (props) => {
  const classes = `${(props.className)? props.className: '' } ${styles.card}`;

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;
