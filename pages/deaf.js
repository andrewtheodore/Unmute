import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Style } from "../styles/deaf"
import axios from 'axios';
import $ from "jquery"

export default function Home() {
    const [text, setText] = useState([])
    const [msg, setMsg] = useState("")
    const [lastmsg, setLastmsg] = useState("")

    const sdk = require("microsoft-cognitiveservices-speech-sdk");
    const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");

    // const fromMic = () => {
    //     let audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
    //     let recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
        
    //     console.log('Speak into your microphone.');
    //     recognizer.recognizeOnceAsync(result => {
    //         var res = `${result.text}`
    //         var teks = [...text];
    //         var obj = { msg: res, user: 1}
    //         teks.concat(obj)
    //         setText(teks)
    //         console.log(`RECOGNIZED: Text=${result.text}`);
    //     });
    // }

    const passtext = async() => {
        var data
        console.log("get data")
        await axios.get("https://unmuteapi.azurewebsites.net/receive_text")
        .then((resp) => {
            console.log("resp: ")
            console.log(resp.data)
            data = resp.data
        })
        .catch((error) => {})
        .finally(() => {})
        if(data != lastmsg && data != undefined){
            var obj = { msg: data, user: 0}
            var teks = [...text, obj];
            // teks.concat(obj)
            aa(data)
            console.log(data)
            console.log(lastmsg)
            setText(teks)
            setLastmsg(data)
        }
    }

    const aa = (a) => {
        const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");
        const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
    
        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
            a,
            result => {
                if (result) {
                    // console.log(JSON.stringify(result));
                }
                synthesizer.close();
            },
            error => {
                // console.log(error);
                synthesizer.close();
            });
    }

    // useEffect(async () => {
    //     const getAlerts = async() => {
    //         var data
    //         await axios.get("https://unmuteapi.azurewebsites.net/receive_text")
    //         .then((resp) => {
    //             data = resp.data
    //         })
    //         .catch((error) => {})
    //         .finally(() => {})
    //         if(data != lastmsg && data != undefined){
    //             var teks = [...text, { msg: data, user: 0}];
    //             console.log(teks)
    //             // var obj = { msg: data, user: 0}
    //             console.log(data)
    //             // teks.concat(obj)
    //             console.log(teks)
    //             setText(teks)
    //             setLastmsg(data)
    //         }
    //     }
    //     await getAlerts()
    //     const interval = setInterval(() => getAlerts(), 20000)
    //     return () => {
    //       clearInterval(interval);
    //     }
    // }, [])

    const synthesizeSpeech = () => {
        const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");
        const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
    
        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
            msg,
            result => {
                if (result) {
                    // console.log(JSON.stringify(result));
                }
                synthesizer.close();
            },
            error => {
                // console.log(error);
                synthesizer.close();
            });
    }

    const EnterMessage = async(event) => {
        console.log(event)
        var code = event.keyCode || event.which
        if (code === 13 && msg !== "") {
            synthesizeSpeech()
            console.log("masuk sini")
            var obj = { msg: msg, user: 1}
            var teks = [...text, obj];
            
            // teks.concat(obj)
            setText(teks)
            setMsg("")
            await axios
                .post("https://unmuteapi.azurewebsites.net/send_text", 
                    "converted_text=" + data
                )
                .then((resp) => {
                    console.log(resp.data)
                })
                .catch((error) => {})
                .finally(() => {})
        }
      }

    return (
        <Style onClick={() => passtext()} >
            <div className="topnavbar">
                <div className="navbar">
                    <img src="logo_v1 1.png" className="imagelogo" /> 
                </div>
                <div className="navbartext">
                    <div className="navbarteks">Feedback</div>
                    <div className="navbarteks navbardesc">Settings</div>
                    <div className="navbarteks navbardesc">About Us</div>
                    <div className="navbarteks navbardesc loginbox">Login</div>
                </div>
            </div>
            <div className="middlewrapper">
                <div className="leftpipe">
                    <div className="contact">
                        <img src="contact.png" className="contactimage" />
                    </div>
                    <div className="call">
                        <img src="call.png" className="contactimage" />
                    </div>
                </div>
                <div className="secondwrapper">
                    <input className="input" placeholder="Search call / meeting" />
                    <div className="newmeeting">
                        Start a new meeting
                    </div>
                    <div className="usersegment useractive">
                        Microsoft APAC Hackathon
                    </div>

                    <div className="usersegment useractive">
                        Lorem Ipsum
                    </div>

                    <div className="usersegment useractive">
                        Lorem Ipsum
                    </div>

                    <div className="usersegment useractive">
                        Lorem Ipsum
                    </div>
                </div>
                <div className="chatsection">
                    <div className="chatwrappertitle">
                        <div className="chattitle">
                            Microsoft APAC Hackathon
                        </div>
                        <div className="chatid">
                            ID: 471232327
                        </div>
                        <div className="endmeeting">
                            End Meeting
                        </div>
                    </div>
                    <div className="chatright">
                        <div>
                            <div className="chatt">
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
                            <div>
                                <textarea className="inputuser" value={msg} onChange={(e) => setMsg(e.target.value)}
                                onKeyPress={EnterMessage}
                                ></textarea>
                            </div>
                        </div>
                        <div className="rightchatsection">
                            <div className="rightbox">
                                <div className="topbox">
                                    Excuse Me
                                </div>
                                <div className="boxdesc">
                                    Excuse Me, I would like to talk
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="topbox">
                                    Greetings
                                </div>
                                <div className="boxdesc">
                                    Hello, nice to meet you all
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
  )
}
