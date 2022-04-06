import { Container } from 'react-bootstrap';
import MainContents from './component/MainContents'
import WeddingCards from './component/WeddingCards'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <WeddingCards />
      <MainContents />
    </Container>
  );
}

export default App;
