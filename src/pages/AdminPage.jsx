import styles from "./AdminPage.module.css";
import CompanyManagement from "../components/CompanyManagement/CompanyManagement";
import CommunictionManagement from "../components/CommunicationManagement/CommunicationManagement";
function AdminPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CompanyManagement/>
      </div>
      <div className={styles.right}>
        <CommunictionManagement/>
      </div>
    </div>
  )
}

export default AdminPage
