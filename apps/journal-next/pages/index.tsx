import { Navigation } from '../components/navigation/navigation';
import styles from './index.module.scss';

export function IndexPage() {
  return (
    <div className={styles.page}>
      Learners
    </div>
  );
}

// TODO: create reusable layouts
IndexPage.getLayout = (page: JSX.Element) => (
  <>
    <Navigation />
    {page}
  </>
);

export default IndexPage;
