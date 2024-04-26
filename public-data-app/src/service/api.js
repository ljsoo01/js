export async function getPublicData(signguCode) {

  const CODES = [
    {signguCode: "11110"},
    {signguCode: "11170"},
    {signguCode: "11440"},
    {signguCode: "11680"},
  ]

  let url = "https://apis.data.go.kr/B552468/acdntFreqocZone/getAcdntFreqocZone";

  url += "?serviceKey=8MdmqT%2FrOcU6D4yvSg0C%2BJM1peRCog40X%2Fa30aIJ4YCPOEO5VfPhX112ph630L63jSNMPTFuiPWBrs2ctY5eMA%3D%3D";
  url += "&pageNo=1";
  url += "&numOfRows=10";
  url += "&dataType=json";
  url += "&signguCode=" + signguCode;

  const res = await fetch(url, {});

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
}