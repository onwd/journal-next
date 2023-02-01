import { Container } from '@nextui-org/react';
import { Navigation } from '../../components/navigation/navigation';

export function ReportsPage() {
  return (
    <Container lg>
      Reports
    </Container>
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
