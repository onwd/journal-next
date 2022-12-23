import { Navigation } from '../components/navigation/navigation';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      Learners
    </div>
  );
}

// TODO: create reusable layouts
Index.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default Index;
