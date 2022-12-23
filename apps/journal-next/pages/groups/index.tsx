import { Navigation } from '../../components/navigation/navigation';
import styles from './index.module.scss';

export function GroupsPage() {
  return (
    <div className={styles.page}>
      Groups
    </div>
  );
}

// TODO: create reusable layouts
GroupsPage.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default GroupsPage;
