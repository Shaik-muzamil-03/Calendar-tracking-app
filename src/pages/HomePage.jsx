import React from 'react'
import styles from "./HomePage.module.css"
import AdminPage from './AdminPage'
function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Calender Tracking App</h1>
        <p>Admin/User</p>
      </div>
      <div className={styles.content}>
        <AdminPage/>
      </div>
    </div>
  )
}

export default HomePage
