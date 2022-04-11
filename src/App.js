import { Container, Row, Col } from 'react-bootstrap';
import InfoComment from './component/InfoComment'
import WeddingCards from './component/WeddingCards'
import TitleComponent from './component/TitleComponent'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <TitleComponent />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <WeddingCards />
        </Col>
        <Col xs={12} md={6}>
          <InfoComment />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          Footer
        </Col>
      </Row>
    </Container>
  );
}

export default App;
