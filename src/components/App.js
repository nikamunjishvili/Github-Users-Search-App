import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchBar from "./SearchBar"
import InformationBox from "./InformationBox"

function App() {
const [lightMode,setLightMode] = useState(false);
const [userName,setUserName] = useState("nikamunjishvili");
const [data,setData] = useState({created_at:"as"});



  return (
    <Body lightMode={lightMode}>
      <Mainpage>
        <Header lightMode={lightMode} setLightMode={setLightMode}/>
        <SearchBar data={data} setData={setData} userName={userName} setUserName={setUserName} lightMode={lightMode}/>
        <InformationBox lightMode={lightMode} data={data}/>
      </Mainpage>
    </Body>
  );
}

export default App;

const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({lightMode} )=> (lightMode ? "#F6F8FF":"#141D2F")};

`

const Mainpage = styled.div`
  width: 87.2%;
  max-width: 573px;

  @media (min-width: 1440px){
    max-width: 730px;
  }
`