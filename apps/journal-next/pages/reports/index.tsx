import { Navigation } from '../../components/navigation/navigation';
import styles from './index.module.scss';

export function Reports() {
  return (
    <div className={styles.page}>
      Reports
    </div>
  );
}

// TODO: create reusable layouts
Reports.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default Reports;
