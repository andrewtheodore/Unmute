import styled from "styled-components"

export const Style = styled.div`
background-color: #E5E5E5;
height: 100vh;

.imagelogo{
    width: 5.625rem;
    height: 5.625rem;

    margin-left: 3.75rem;
}

.topnavbar{
    display: flex;
    flex-direction: row;
    padding-top: 1.5rem;
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

    display: flex;
    justify-content: center;
}
.navbardesc{
    margin-left: 3rem;
}

.loginbox{
    width: 125px;
    height: 50px;

    text-align: center;

    background: #6B9080;
    box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    color: white;

    cursor: pointer;
}


.loginbody{
    display: flex;
    flex-direction: row;
}

.rightimage{
    width: 920px;
    height: 690px;

    margin-left: 140px;
    margin-top: 54px;
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
    margin-top: 184px;
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

    display: flex;
    flex-direction: row;
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
    margin-left: 694px;
    margin-top: 33px;
    cursor: pointer;
}

.leavemeeting{
    width: 225px;
    height: 50px;

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
margin-left: 658px;
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

.midwrapper{
    margin-top: 50px;
    height: 675px;
}

.rightbubblechat{
    width: 700px;
/* height: 50px; */

    background: #CCE3DE;
    border-radius: 8px;
}

.bubblechat{
    margin-top: 12px;
    height: auto;
    border-radius: 24px;
    padding: 1rem;
}


.rightchatbubble{
    display: flex;
    flex-direction: row-reverse;
    margin-right: 70px;
}

.imagecircle{
    background: #E8F6EB;
    width: 65px;
height: 65px;
}

.modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    // padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 2rem;
    border: 1px solid #888;
    width: 810px;
    height: auto;
    border-radius: 8px;

    width: 690px;
    height: 820px;
    background: #F6FFF8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  .modaltitle {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    color: #475F54;
    display: flex;
    justify-content: center;
  }


.usernamebox{
    width: 550px;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;

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

.loginboxmodal{
    width: 260px;
    height: 60px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: #6B9080;
    border-radius: 8px;
    box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.1);

    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
}

    .linecontainer{
        display: flex;

        width: 560px;
        height: 60px;
    
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
    }

    .line{
        width: 239px;
        height: 0px;
        border: 1px solid #6B9080;
        margin-top: 12px;
    }

    .or{
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #605E5C;
        margin-left: 22px;
        margin-right: 22px;
    }

    .appbutton{
        width: 550px;
        height: 64px;

        background: #BED3C8;
        border-radius: 8px;

        margin-left: auto;
        margin-right: auto;

        display: flex;
        flex-direction: row;
        align-items: center;

        padding-left: 40px;
        margin-bottom: 28px;
    }

    .applogo{
        align-items: center;
        text-align: center;

        
    }

    .signin{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #605E5C;
        margin-left: 40px;
    }

    .account{
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;

color: #465F54;

    }

`
