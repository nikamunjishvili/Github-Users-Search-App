import styled from "styled-components"
import moonIcon from "../assets/icon-moon.svg"
import sunIcon from "../assets/icon-sun.svg"



function Header({lightMode,setLightMode}){

    function changeLight(){
        setLightMode(!lightMode)
    }
    
    return (
        <MainBox>
            <Logo lightMode = {lightMode}>devfinder</Logo>
            <LightMode>
                {lightMode ? <Dark>DARK</Dark>:<Light>LIGHT</Light>}
                <LightModeImg onClick={() => changeLight()} src={lightMode ? moonIcon: sunIcon}></LightModeImg>
            </LightMode>
        </MainBox>
    )
}


export default Header

const MainBox = styled.div`
    display: flex;
    justify-content: space-between;

`

const Dark =styled.span`
    font-family: Space Mono;
    font-size: 13px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 2.5px;
    text-align: right;
    color: #4B6A9B;

`

const Light = styled.span`
    font-family: Space Mono;
    font-size: 13px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 2.5px;
    text-align: right;
    color: white;
    

`

const Logo = styled.h1`
    font-family: Space Mono;
    font-size: 26px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0px;
    text-align: left;
    
    color:${({lightMode}) => lightMode ? "#222731":"white"}

`

const LightMode = styled.div`
    display: flex;
    align-items: center;
    

`

const LightModeImg = styled.img`
    width: 20px;
    height: 20px;
    margin-left:16px;
    cursor:pointer;
`