import { Navigation } from '../../components/navigation/navigation';
import styles from './index.module.scss';

export function Attendance() {
  return (
    <div className={styles.page}>
    </div>
  );
}

// TODO: create reusable layouts
Attendance.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default Attendance;
