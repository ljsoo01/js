import { Map } from "react-kakao-maps-sdk";

const positions = [
  { title: "",},
]

export default function KaKaoMap() {


  return(
    <Map 
      id="map"
      center={{lat: 33.450701,
        lng: 126.570667,}}
      style={{
        width: "100%",
        height: "350px",
      }}
      level={3}
    />
  )
}