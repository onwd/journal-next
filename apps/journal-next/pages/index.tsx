import { Navigation } from '../components/navigation/navigation';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <Navigation />
    </div>
  );
}

export default Index;
