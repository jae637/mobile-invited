// import { Container, Row, Col } from 'react-bootstrap';
// import InfoComment from './component/InfoComment'
// import WeddingCards from './component/WeddingCards'
// import TitleComponent from './component/TitleComponent'

import 'bootstrap/dist/css/bootstrap.min.css';
import NormalLayout from 'component/NormalLayout';
import { useNavigate } from 'react-router-dom'
import { IoChevronBackSharp } from 'react-icons/io5'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <div className='d-sm-none' onClick={() => { navigate(-1) }}>
        <IoChevronBackSharp className="m-2 h3" />
      </div>
      <NormalLayout />
    </>
  );
}

export default App;
