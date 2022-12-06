// import { Container, Row, Col } from 'react-bootstrap';
// import InfoComment from './component/InfoComment'
// import WeddingCards from './component/WeddingCards'
// import TitleComponent from './component/TitleComponent'

import 'bootstrap/dist/css/bootstrap.min.css';
import NormalLayout from 'component/NormalLayout';
import { useNavigate, useParams } from 'react-router-dom'
import { IoChevronBackSharp } from 'react-icons/io5'
import { useEffect } from 'react';

function App() {
  const params = useParams();
  const personalName = params.name
  const navigate = useNavigate()

  useEffect(() => {
    if (personalName.length > 10) {
      navigate(-1)
    }
  }, [])

  return (
    <>
      <div className='d-sm-none' style={{ position: 'absolute', zIndex: 100 }} onClick={() => { navigate(-1) }}>
        <IoChevronBackSharp className="m-2 h3" />
      </div>
      <NormalLayout />
    </>
  );
}

export default App;
