import AdminUserTab from "@shared/ui/AdminUserTab";

import styles from "./styles.module.scss";

interface HeaderProps {
  name: string;
  position: string;
  photo: ImageMetadata;
}

const AdminHeader: React.FC<HeaderProps> = ({ name, position, photo }) => {
  return (
    <div className={styles.client__content_header}>
      <span className={styles.client__content_header_subheading}>
        Панель администратора
      </span>
      <div className={styles.client__content_usertab}>
        <AdminUserTab name={name} position={position} photo={photo} />
      </div>
    </div>
  );
};

export default AdminHeader;
