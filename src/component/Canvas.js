import React, { useEffect, useRef, useState } from 'react';
import cursor1 from 'asset/cursor1.png'
import cursor2 from 'asset/cursor2.png'
import cursor3 from 'asset/cursor3.png'
import cursor4 from 'asset/cursor4.png'
import background from 'asset/background.png'

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

    const charactor = [cursor1, cursor2, cursor3, cursor4]


    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth > 1920 ? window.innerWidth : 1920;
        canvas.height = window.innerHeight > 1080 ? window.innerHeight : 1080;
        setPos({ x: window.innerWidth / 2 - 60, y: window.innerHeight / 2 - 60 })

        const bgcanvas = bgRef.current;
        bgcanvas.width = window.innerWidth > 1920 ? window.innerWidth : 1920;
        bgcanvas.height = window.innerHeight > 1080 ? window.innerHeight : 1080;

        let offset = calculateOffset(window.innerWidth, window.innerHeight)

        let bg = new Image();
        bg.src = background;
        bg.onload = () => {
            console.log(offset)
            bgcanvas.getContext("2d").drawImage(bg, offset.x, offset.y, 1920, 1080)
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

    function calculateOffset(width, height) {
        console.log(width, height)
        let obj = { x: 0, y: 0 }
        if (width > 1920) {
            obj.x = (width - 1920) / 2
        } else {
            obj.x = (1920 - width) / -2
        }
        if (height > 1080) {
            obj.y = (height - 1080) / 2
        } else {
            obj.y = (1080 - height) / -2
        }
        return obj;
    }

    function draw(tmp) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(tmp, pos.x, pos.y, 120, 120);
    }

    function clickContents(e) {
        return false;
    }

    function clickEvent(e) {
        if (clickContents(e)) {
            // 컨텐츠 클릭시

        } else {
            // 이동 명령시
            let distX = e.clientX - 60 - pos.x;
            let distY = e.clientY - 60 - pos.y;
            let divide = distX ** 2 + distY ** 2;
            console.log(divide)
            divide = Math.floor(Math.sqrt(divide));

            distX /= divide;
            distY /= divide;

            if (moving)
                clearInterval(moving)
            console.log(moving)
            let i = 0;
            let tick = setInterval(() => {
                if (i < divide) {
                    console.log(i)
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
        </>
    );
}

export default Canvas;