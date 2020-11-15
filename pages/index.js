import Head from 'next/head'
import React, { useState } from 'react';
import { Style } from "../styles/guest"
import axios from 'axios';

export default function Home() {
    const [text, setText] = useState([])
    const [lastmsg, setLastmsg] = useState("")
    const [button, setButton] = useState(true)

    const sdk = require("microsoft-cognitiveservices-speech-sdk");
    const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");

    const fromMic = async() => {
        console.log(button)
        setButton(false)
        let audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
        let recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
        var data = ""
        
        console.log('Speak into your microphone.');
        recognizer.recognizeOnceAsync(async (result) => {
            data = `${result.text}`
            var res = `${result.text}`
            var teks = [...text];
            var obj = { msg: res, user: 1}
            teks.push(obj)
            setText(teks)
            console.log(`RECOGNIZED: Text=${result.text}`);
            await axios
                .post("https://unmuteapi.azurewebsites.net/send_text", {
                    converted_text: data
                })
                .then((resp) => {
                    console.log(resp.data)
                })
                .catch((error) => {})
                .finally(() => {})
        });
        // console.log("asdfasdf")
        // console.log(data)

        // if(data != ""){
        //     console.log("posted")
        //     await axios
        //         .post("https://unmuteapi.azurewebsites.net/send_text", {
        //             converted_text: data
        //         })
        //         .then((resp) => {
        //             console.log(resp.data)
        //         })
        //         .catch((error) => {})
        //         .finally(() => {})
        // }
    }


    const passtext = async() => {
        var data
        await console.log("passtext")
        await axios.get("https://unmuteapi.azurewebsites.net/pass_text")
        .then((resp) => {
            data = resp.data
        })
        .catch((error) => {})
        .finally(() => {})
        if(data != lastmsg){
            var obj = { msg: data, user: 0}
            var teks = [...text, obj];
            // teks.concat(obj)
            console.log(data)
            console.log(lastmsg)
            setText(teks)
            setLastmsg(data)
        }
    }

    return (
        <Style>
            <div className="topnavbar">
                <div className="navbar">
                    <img src="logo_v1 1.png" className="imagelogo" /> 
                </div>
                <div className="navbartext">
                    <div>Feedback</div>
                    <div className="navbardesc">Settings</div>
                    <div className="navbardesc">About Us</div>
                    <div className="navbardesc loginbox">Login</div>
                </div>
            </div>

            <div className="midwrapper" onClick={() => passtext()}>
                {text.map((data, index) => (
                    <div>
                        {data.user == 1 ? 
                            <div className="rightchatbubble" key={index}>
                            <div className="bubblechat rightbubblechat">
                                {data.msg}
                            </div>
                        </div>
                        :
                        <div className="bubblechat leftbubblechat"> 
                            {data.msg}
                        </div>
                        }
                    </div>
                ))}
            </div>
            <div className="bottomwrapper" onClick={() => passtext()}>
                <div className="id">
                    ID: 471232327
                </div>
                <div className="">
                    {/* {button ?  */}
                    <div className="nottalkingbutton">
                        <img src="mic.png" className="micimage" onClick={() => fromMic()} />
                    </div>
                    {/* :
                    <div className="talkingbutton">
                        <img src="micwhite.png" className="micimage" onClick={() => stoptalking()} />
                    </div>
                    } */}
                </div>
                <div className="leavemeeting">
                    Leave Meeting
                </div>
            </div>
        </Style>
  )
}