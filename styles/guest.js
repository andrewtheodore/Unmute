import styled from "styled-components"

export const Style = styled.div`
background-color: #E5E5E5;

.topnavbar{
    display: flex;
    flex-direction: row;
    padding-top: 1.5rem;
    height: 99px;
    background-color: #f6fff8;
}

.navbartext{

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 50px;

    color: #000000;

    margin-left: 55%;

    display: flex;
    flex-direction: row;

    margin-top: 20px;
}
.navbardesc{
    margin-left: 3rem;

}

.navbarteks{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
}

.loginbox{

    margin-top: -8px;
    width: 125px;
    height: 50px;
    line-height: 50px;

    text-align: center;

    background: #6B9080;
    box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    color: white;
}

.loginbody{
    display: flex;
    flex-direction: row;
}

.rightimage{
    width: 920px;
    height: 690px;

    margin-left: 140px;
    margin-top: 94px;
}

.fullnametitle{
    font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 54px;
/* identical to box height */


color: #475F54;

}

.leftwrapper{
    margin-top: 234px;
    margin-left: 250px;
}

.fullnameinput{
    margin-top: 0.5rem;
    width: 550px;
    height: 60px;

    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 111% */

display: flex;
align-items: center;

color: #605E5C;

}

.meetingid{
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    color: #475F54;

    margin-top: 29px;
}

.startbutton{
    width: 260px;
    height: 60px;

    background: #6B9080;
    border-radius: 8px;

    color: white;

    font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 20px;
/* identical to box height, or 83% */

display: flex;
align-items: center;
justify-content: center;

color: #FFFFFF;
margin-top: 70px;
}

a:link, a:visited {
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

.bottomwrapper{
    height: 109px;
    background: #FFFFFF;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.id{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #000000;

    margin-left: 60px;

    line-height: 109px;
}

.micimage{
    width: 38px;
    height: 43px;
}

.leavemeeting{
    width: 225px;
    height: 50px;

    margin-right: 60px;

    background: #FF0000;
    box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 50px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

margin-top: 37px;
// margin-left: 658px;
}

.leftbubblechat{
    width: 700px;
    /* height: 116px; */
    border-radius: 8px;
    font-size: 20px;

    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);

    margin-left: 41px;
    
}


.imagelogo{
    width: 48px;
    height: 53px;

    margin-left: 3.75rem;
}
.midwrapper{
    padding-top: 50px;
    height: 700px;
    overflow: auto;

    background-color: #E8F6EB;
}

.rightbubblechat{
    width: 650px;
/* height: 50px; */
    text-align: right;
    background: #CCE3DE;
    border-radius: 8px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

.bubblechat{
    margin-bottom: 32px;
    height: auto;
    border-radius: 24px;
    padding: 1rem;
}


.rightchatbubble{
    display: flex;
    flex-direction: row-reverse;
    margin-right: 70px;
}

.nottalkingbutton{

    display: flex;
  justify-content: center;
  align-items: center;

    background: #E8F6EB;
    text-align: center;

    border-radius: 50%;
    width: 65px;
    height: 65px;


    // margin-left: 100%;
    margin-top: 33px;
    cursor: pointer;
}

.talkingbutton{

    display: flex;
    justify-content: center;
    align-items: center;

    background: #FF0000;
    text-align: center;

    border-radius: 50%;
    width: 65px;
    height: 65px;


    margin-left: 694px;
    margin-top: 33px;
    cursor: pointer;
}

.bubblename{
    font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #6B9080;

}


.time{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: right;

    color: rgba(0, 0, 0, 0.47);

    margin-top: 3px;

}

.timeleft{
    text-align: left;
}

`
