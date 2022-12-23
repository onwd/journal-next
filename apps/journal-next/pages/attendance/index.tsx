import { Navigation } from '../../components/navigation/navigation';
import styles from './index.module.scss';

export function AttendancePage() {
  return (
    <div className={styles.page}>
      Attendance
    </div>
  );
}

// TODO: create reusable layouts
AttendancePage.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default AttendancePage;
