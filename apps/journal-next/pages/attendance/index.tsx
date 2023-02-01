import { Container } from '@nextui-org/react';
import { Navigation } from '../../components/navigation/navigation';

export function AttendancePage() {
  return (
    <Container lg>
      Attendance
    </Container>
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
