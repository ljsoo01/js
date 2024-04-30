import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KaKaoMap({ accidents }) {
  const [isVisible, setIsVisible] = useState(false)

  console.log(accidents);

  return(
    <Map 
      id="map"
      center={{lat: accidents[0].centerX,
        lng: accidents[0].centerY}}
      style={{
        width: "100%",
        height: "350px",
      }}
      level={5}
    >
      {accidents.map((accident, index) => (
        <MapMarker
          key={index}
          position={{
            lat: accident.centerX, lng: accident.centerY
          }} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35
            }, // 마커이미지의 크기입니다
          }}
          title={accident.freqocZoneNm} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          onClick={(marker) => map.panTo(marker.getPosition())}
          onMouseOver={() => setIsVisible(true)}
          onMouseOut={() => setIsVisible(false)}
        >
          
        </MapMarker>
      ))}

      
    </Map>
  )
}