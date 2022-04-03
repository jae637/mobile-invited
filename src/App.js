import { Container } from 'react-bootstrap';
import DateContents from './component/DateContents'
import MainContents from './component/MainContents'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <DateContents />
      <MainContents />
    </Container>
  );
}

export default App;
