import { useState, useEffect } from 'react';
import { getPublicData } from './service/api';
import {FaCarBurst } from 'react-icons/fa6';
import KaKaoMap from './components/KakaoMap';

const SIGNGUS = [
  {signguCode: "11110", city: "서울특별시", name: "종로구"},
  {signguCode: "11170", city: "서울특별시", name: "용산구"},
  {signguCode: "11440", city: "서울특별시", name: "마포구"},
  {signguCode: "11680", city: "서울특별시", name: "강남구"},
]

function App() {
  const [signgus, setSigngus] = useState("11110");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const signguList = SIGNGUS.map(signgu => (
    <option key={signgu.signguCode} value={signgu.signguCode}>
      {signgu.city}
      {" "}
      {signgu.name}
    </option>
  ))

  async function fetchData() {

    try {
      setIsLoaded(false);
      setError(null);

      const data = await getPublicData(signgus);

      console.log(data);

    } catch (error) {
      setError(error)
    } finally {
      setIsLoaded(true)
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [signgus]);

  return (
    <div className="App">
      <header className='top-0 z-2 border'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <FaCarBurst className='text-5xl'/>
            <h1 className='font-bold text-xl px-1'>이륜차 사고다발구역 조회</h1>
          </div>

          <div className='flex items-center'>
            <select
              className='border rounded-full px-5 mx-5'
              onChange={({ target }) => setSigngus(target.value)}
            >
              {signguList}
            </select>
          </div>
        </div>
      </header>

      <KaKaoMap />
    </div>
  );
}

export default App;
