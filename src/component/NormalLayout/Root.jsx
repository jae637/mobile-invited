import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Root(props) {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    return (
        <div className="d-flex flex-column align-content-center justify-content-center"
            style={{ textAlign: 'center', width: window.innerWidth, height: window.innerHeight, backgroundColor: '#e3b2ad' }}>
            <div className="d-flex d-row align-items-top justify-content-center">
                <div className='speech-balloon d-flex align-items-baseline' >
                    <div className="d-grid gap-2 p-4 bg-white" style={{ borderRadius: 8, fontSize: '1rem' }}>
                        이름을 적어주세요
                        <Form action={`/${name}`}>
                            <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} />
                        </Form>
                        <Button variant="outline-primary" onClick={(e) => { navigate(name) }} >확인</Button>{' '}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Root;