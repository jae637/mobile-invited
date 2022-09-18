import React, { useEffect, useRef, useState } from 'react';
import cursor1 from 'asset/cursor1.png'
import cursor2 from 'asset/cursor2.png'
import cursor3 from 'asset/cursor3.png'
import cursor4 from 'asset/cursor4.png'
import background from 'asset/background.png'
import WeddingCards from './Canvas/WeddingCards';
import { Container, Modal } from 'react-bootstrap';
import InfoComment from './Canvas/InfoComment';

function Canvas(props) {
    const canvasRef = useRef();
    const bgRef = useRef();
    const [ctx, setCtx] = useState();
    const [second, setSecond] = useState(0);
    // const [minX, setMinX] = useState(0);
    // const [maxX, setMaxX] = useState(0);
    // const [minY, setMinY] = useState(0);
    // const [maxY, setMaxY] = useState(0);
    const [pos, setPos] = useState({})
    const [moving, setMoving] = useState();
    const [persent, setPersent] = useState(1); //캐릭터 및 배경화면 비율

    const [weddingCardModal, setWeddingCardModal] = useState(false);
    const [guestBookModal, setGuestBookModal] = useState(false);

    const charactor = [cursor1, cursor2, cursor3, cursor4]


    useEffect(() => {
        let tPer = window.innerHeight / 1080;
        setPersent(tPer)

        const canvas = canvasRef.current;
        canvas.width = window.innerWidth > 1920 ? window.innerWidth : 1920;
        canvas.height = window.innerHeight > 1080 ? window.innerHeight : 1080;
        setPos({ x: window.innerWidth / 2 - (120 * tPer / 2), y: window.innerHeight / 2 - (120 * tPer / 2) })

        let height = window.innerHeight;
        let width = 1920 * tPer;

        const bgcanvas = bgRef.current;
        bgcanvas.width = window.innerWidth > 1920 ? window.innerWidth : 1920;
        bgcanvas.height = window.innerHeight > 1080 ? window.innerHeight : 1080;

        let offset = calculateOffset(window.innerWidth, window.innerHeight, width, height)
        // let offset = calculateOffset(width, height)
        // let offset = calculateOffset(window.innerWidth, window.innerHeight)



        let bg = new Image();
        bg.src = background;
        bg.onload = () => {
            console.log(offset)
            bgcanvas.getContext("2d").drawImage(bg, offset.x, offset.y, width, height)
        }

        const context = canvas.getContext("2d")
        setCtx(context);
    }, [])

    useEffect(() => {
        const countdown = setInterval(() => {
            setSecond(second + 1);
            // if (ctx)
            //     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }, 500);
        return () => clearInterval(countdown);
    }, [second]);

    useEffect(() => {
        if (ctx) {
            let tmp = new Image();
            tmp.src = charactor[second % 4];
            tmp.onload = () => {
                draw(tmp);
            }
        }
    })

    function calculateOffset(width, height, originW = 1920, originH = 1080) {
        console.log(width, height)
        let obj = { x: 0, y: 0 }
        if (width > originW) {
            obj.x = (width - originW) / 2
        } else {
            obj.x = (originW - width) / -2
        }
        if (height > originH) {
            obj.y = (height - originH) / 2
        } else {
            obj.y = (originH - height) / -2
        }
        return obj;
    }

    function draw(tmp) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(tmp, pos.x, pos.y, 120 * persent, 120 * persent);
    }

    function clickContents(e) {
        let picxelData = bgRef.current.getContext("2d").getImageData(e.clientX, e.clientY, 1, 1).data;
        console.log(`%c 투명도: (${picxelData[3]})`, `background:rgba(${picxelData[0]},${picxelData[1]},${picxelData[2]},${picxelData[3]}`)
        let a = picxelData[3]

        let clickPoint = { x: e.clientX, y: e.clientY };
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight / 2;

        if (a < 255) {
            if (clickPoint.x < centerX - 10 && clickPoint.y < centerY - 10) {
                //인사말
                return 1;
            } else if (clickPoint.x > centerX + 10 && clickPoint.y < centerY - 10) {
                // 오시는 길
                return 2;
            } else if (clickPoint.x < centerX - 10 && clickPoint.y > centerY + 10) {
                // 방명록
                return 3;
            } else if (clickPoint.x > centerX + 10 && clickPoint.y > centerY + 10) {
                // 마음 전하시는 곳
                return 4;
            }
        } else {
            return 0;
        }
    }

    function clickEvent(e) {
        let tmp = clickContents(e)
        if (tmp) {
            // 1. 인사말, 2. 오시는 길, 3. 방명록, 4. 마음 전하는 곳
            switch (tmp) {
                case 1:
                    setWeddingCardModal(true)
                    break;
                case 2:
                    break;
                case 3:
                    setGuestBookModal(true)
                    break;
                case 4:
                    break;
                default:
                    break;
            }

        } else {
            // 이동 명령시
            let distX = e.clientX - (120 * persent / 2) - pos.x;
            let distY = e.clientY - (120 * persent / 2) - pos.y;
            let divide = distX ** 2 + distY ** 2;
            divide = Math.floor(Math.sqrt(divide));

            distX /= divide;
            distY /= divide;

            if (moving)
                clearInterval(moving)
            let i = 0;
            let tick = setInterval(() => {
                if (i < divide) {
                    setPos({ x: pos.x + distX * i, y: pos.y + distY * i });
                    i += 1;
                } else {
                    clearInterval(tick)
                }
            }, 5)
            setMoving(tick);
        }
    }

    return (
        <>
            <canvas style={{ position: 'absolute', overflow: 'hidden' }} ref={bgRef} />
            <canvas style={{ position: 'absolute', overflow: 'hidden' }} ref={canvasRef} onClick={clickEvent} />
            {/* 1. 인사말 모달 */}
            <Modal
                size="lg"
                show={weddingCardModal}
                fullscreen
                onHide={() => setWeddingCardModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                className="modal-fullscreen"
            >
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            인사말
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WeddingCards />
                    </Modal.Body>
                </Container>
            </Modal>
            {/* 2. 오시는 길 모달*/}
            {/* 3. 방명록 모달 */}
            <Modal
                size="lg"
                show={guestBookModal}
                fullscreen
                onHide={() => setGuestBookModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            방명록
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InfoComment />
                    </Modal.Body>
                </Container>
            </Modal>
            {/* 4. 마음 전하는 곳 모달 */}
        </>
    );
}

export default Canvas;