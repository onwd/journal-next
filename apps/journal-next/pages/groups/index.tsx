import { Navigation } from '../../components/navigation/navigation';
import styles from './index.module.scss';

export function Groups() {
  return (
    <div className={styles.page}>
    </div>
  );
}

// TODO: create reusable layouts
Groups.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default Groups;
