import styled from "styled-components";
import locationIcon from "../assets/icon-location.svg"
import websiteIcon from "../assets/icon-website.svg"
import twitterIcon from "../assets/icon-twitter.svg"
import companyIcon from "../assets/icon-company.svg"

function InformationDiv({data,lightMode}){
    let date = data.created_at;
    let year = date[0]+date[1]+date[2] + date[3]
    let month = date[5]+date[6];
    let day = date[8]+date[9]
    const months=[0,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    return(
        <MainBox lightMode={lightMode}>
            <AvatarAndName>
                <AvatarImg src={data.avatar_url} ></AvatarImg>
                <NameAndJoinDate>
                    <NameAndLogin>
                        <Name lightMode={lightMode}>{data.name}</Name>
                        <LoginName>@{data.login}</LoginName>
                    </NameAndLogin>
                    <JoinDate lightMode={lightMode}>Joined {day} {months[Number(month)]} {year} </JoinDate>
                </NameAndJoinDate>
            </AvatarAndName>

            <Bio lightMode={lightMode}>{data.bio != null ? data.bio:"This profile has no bio"}</Bio>
            
            <FollowersAndRepo lightMode={lightMode}>
                <Repo>
                    <p>Repos</p>
                    <span>{data.public_repos}</span>
                </Repo>
                <Followers>
                    <p>Followerss</p>
                    <span>{data.followers}</span>
                </Followers>
                <Following>
                    <p>Followings</p>
                    <span>{data.following}</span>
                </Following>
            </FollowersAndRepo>
            
            <FooterInfo >
                <Location lightMode={lightMode}>
                    <img src={locationIcon}></img>
                    {data.location ? <p>{data.location}</p>:<p style={{opacity:0.5}}>Not aviable</p>}
                </Location>
                <Website lightMode={lightMode}>
                    <img src={websiteIcon}></img>
                    {data.html_url ? <A lightMode={lightMode}  href={data.html_url} target="blank">{data.html_url}</A>:<p style={{opacity:0.5}}>Not aviable</p>}
                </Website>
                <Twitter lightMode={lightMode}>
                    <img src={twitterIcon}></img>
                    {data.twitter ? <p>{data.twitter}</p>:<p style={{opacity:0.5}}>Not aviable</p>}
                </Twitter>
                <Company lightMode={lightMode}>
                    <img src={companyIcon}></img>
                    {data.company ? <p>{data.company}</p>:<p style={{opacity:0.5}}>Not aviable</p>}
                </Company>
            </FooterInfo>
        </MainBox>
    )
}

export default InformationDiv

const MainBox=styled.div`
    margin-top: 16px;
    box-sizing: border-box;
    padding: 32px 24px 48px 24px;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.1986);
    background-color: ${({lightMode}) => (lightMode ? "white":"#1E2A47")};
    border-radius: 15px;

    @media (min-width: 768px){
        padding: 40px;
    }

    @media (min-width: 1440px){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 48px;
    }
`
const AvatarAndName = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 1440px){
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        
    }
`

const AvatarImg = styled.img`
    width: 70px;
    border-radius: 50%;

    @media (min-width: 768px){
        width: 117px;
        
    }
`
const NameAndJoinDate = styled.div`
    margin-left: 19px;

    @media (min-width: 768px){
        margin-left: 40px;
    }

    @media (min-width: 1440px){
        width: 75%;
        display: flex;
        justify-content: space-between;
        
    }
`

const NameAndLogin = styled.div`
`

const Name = styled.h1`
    font-family: Space Mono;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: ${({lightMode}) => (lightMode ? "#4B6A9B":"white")};
 
    @media (min-width: 768px){
        font-size: 26px;
        
    }

`

const LoginName = styled.p`
    font-family: Space Mono;
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: #0079FF;

    @media (min-width: 768px){
        font-size: 16px;
        line-height: 24px;
        margin-top: 5px;
        
    }
    

`

const JoinDate = styled.p`
    font-family: Space Mono;
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 6px;
    color: ${({lightMode}) => (lightMode ? "#697C9A":"white")};
    @media (min-width: 768px){
        font-size: 15px;
        line-height: 25px;
        
    }
`

const Bio = styled.p`
    font-family: Space Mono;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    color: ${({lightMode}) => (lightMode ? "#4B6A9B":"white")};
    margin-top: 20px;

    @media (min-width: 768px){
        font-size: 15px;
    }

    @media (min-width: 1440px){
        width: 75%;
        margin-top: -10px;;
    }
`

const FollowersAndRepo = styled.div`
    width: 100%;
    height: 85px;
    margin-top: 23px;
    background-color: ${({lightMode}) => (lightMode ? "#F6F8FF":"#141D2F")};
    border-radius: 10px;
    display: flex;
    box-sizing: border-box;
    padding: 18px 0;
    justify-content: space-around;

    p{
        font-family: Space Mono;
        font-size: 11px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: center;
        color: ${({lightMode}) => (lightMode ? "#4B6A9B":"white")};

        @media (min-width: 768px){
        font-size: 13px;
        line-height: 19px;
        
    }
    }

    span{
        font-family: Space Mono;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        color: #2B3442;
        color: ${({lightMode}) => (lightMode ? "#2B3442":"white")};

        @media (min-width: 768px){
        font-size: 16px;
        line-height: 23px;
        
    }
    }

    @media (min-width: 1440px){
        width: 75%;
        
    }
    
`

const Repo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
    width: 30%;
`

const Followers = Repo;

const Following = Repo;

const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-top: 24px;

    @media (min-width: 768px){
            flex-direction: row;
            flex-wrap: wrap;
        }
    
    @media (min-width: 1440px){
        width: 75%;
        
    }
`

const Location = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;

    @media (min-width: 768px){
            width: 50%;
        }



    >p{
        position: absolute;
        left:40px;
        font-family: Space Mono;
        font-size: 13px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        color: ${({lightMode}) => (lightMode ? "#4B6A9B":"white")};
        text-decoration: none;

        @media (min-width: 768px){
            font-size: 15px;
            line-height: 22px;   
        }

        &:hover{
            a{
                text-decoration: underline;
            }
        }
    }
`

const A = styled.a`
        position: absolute;
        left:40px;
        font-family: Space Mono;
        font-size: 13px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        color: ${({lightMode}) => (lightMode ? "#4B6A9B":"white")};
        text-decoration: none;

        @media (min-width: 768px){
            font-size: 15px;
            line-height: 22px;   
        }

        &:hover{
            text-decoration: underline;
        }
`
const Website = Location;
const Twitter = Location;
const Company = Location;