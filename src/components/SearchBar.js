import searchIcon from "../assets/icon-search.svg"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"



function SearchBar(props){
    const [isError,setIsError] = useState(false);

    function searchUser(){
        let user = document.getElementById("userName").value
        props.setUserName(user);
    }
    
    useEffect(() => {
       const fetch = async () =>{
        try{
       let response =  await axios.get(`https://api.github.com/users/${props.userName}`);
       console.log(response.status);
       props.setData(response.data)
       setIsError(false);
    } catch (eror){
        if(eror.response.status === 404){
            setIsError(true);
        }
    }
        };
        fetch();
    },[props.userName]);
    



    return (
        <UserInputDiv lightMode={props.lightMode}>
            <SearchIcon src={searchIcon}></SearchIcon>
            <UserInput lightMode={props.lightMode} defaultValue={props.userName} id="userName" placeholder="SearchGitHub username..."></UserInput>
            <ErrorMessage style={isError ? {display:"inline"}:{display:"none"}}>No results</ErrorMessage>
            <SearchButton onClick={searchUser} >Search</SearchButton>
        </UserInputDiv>
    )
}


export default SearchBar

const UserInputDiv = styled.div`
    background-color: ${({lightMode}) => (lightMode ? "white":"#1E2A47")};
    height: 60px;
    border-radius: 15px;
    display: flex;
    column-gap: 7px;
    align-items: center;
    margin-top: 35px;
    
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.1986);
    width: 100%;

`

const UserInput = styled.input`
    font-family: Space Mono;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    outline: none;
    background-color: ${({lightMode}) => (lightMode ? "white":"#1E2A47")};
    color: ${({lightMode}) => (lightMode ? "#4B6A9B":"white")};;
    overflow: hidden;
    width: 100%;
    margin-right: auto;
    &:hover{
        cursor: pointer;
    }
`

const ErrorMessage = styled.p`
    font-family: Space Mono;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #F74646;
    margin-right: 24px;
    width: 200px;


`

const SearchIcon = styled.img`
    width: 18px;
    margin-left: 16px;
    margin-right: 8px;

    @media (min-width: 768px){
        margin-left: 32px;
    margin-right: 24px;
    }

`

const SearchButton = styled.button`
    min-width: 84px;
    height: 46px;
    background-color: #0079FF;
    border-radius: 10px;
    font-family: Space Mono;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: center;
    color: white;
    margin-right: 7px;

    &:hover{
        cursor: pointer;
    }

`
