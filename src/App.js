import { Container, Row, Col } from 'react-bootstrap';
import MainContents from './component/MainContents'
import WeddingCards from './component/WeddingCards'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <WeddingCards />
        </Col>
        <Col xs={12} md={6}>
          <MainContents />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
