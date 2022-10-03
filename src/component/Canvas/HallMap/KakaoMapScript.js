const { kakao } = window;
let posX = 37.48696
let posY = 127.03345

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(posX, posY),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(posX, posY);

    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    const iwContent = '<div style="padding:5px;"><a href="https://place.map.kakao.com/522062793" style="color:#333; text-decoration:none" target="_blank" data-id="name" title="브라이드밸리">브라이드밸리</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(posX, posY); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);

    kakao.maps.event.addListener(marker, 'click', function () {
        window.location.assign("https://place.map.kakao.com/522062793");
    })
}