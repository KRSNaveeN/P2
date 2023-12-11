import React from 'react'
import Card from '../UI/Card';
import styles from './UsersList.module.css'
function UsersList(props) {
  return (
    <Card className={styles.users} >
    <ul>
      {props.users.map((item)=> (<li key={Math.random()}>{item.name} and age is {item.age} {item.college}</li>))}
    </ul>
    </Card>
  )
}

export default UsersList

