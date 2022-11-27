import Banner1 from 'asset/moving-dot/001.png';
import Banner2 from 'asset/moving-dot/002.png';
import Banner3 from 'asset/moving-dot/003.png';
import Banner4 from 'asset/moving-dot/004.png';
import Banner5 from 'asset/moving-dot/005.png';
import Banner6 from 'asset/moving-dot/006.png';
import { useEffect, useState } from 'react';

function MovingDot() {
    const [bannerIndex, setBannerIndex] = useState(0)

    useEffect(() => {
        const customInterval = setInterval(() => {
            setBannerIndex(bannerIndex + 1);
        }, 100);
        return () => clearInterval(customInterval);
    }, [bannerIndex])

    let imgArr = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6]
    return <div className="background-banner d-flex justify-content-center">
        <img src={imgArr[bannerIndex % imgArr.length]} alt="banner" />
    </div>
}
export default MovingDot;