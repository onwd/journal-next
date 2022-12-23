import { Navigation } from '../../components/navigation/navigation';
import styles from './index.module.scss';

export function ReportsPage() {
  return (
    <div className={styles.page}>
      Reports
    </div>
  );
}

// TODO: create reusable layouts
ReportsPage.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default ReportsPage;
