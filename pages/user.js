import React, { useState, useEffect } from 'react';
import { Style } from "../styles/deaf"
import axios from 'axios';
import fire from "../config/fire-config"
import firebase from "firebase/app"
import "firebase/firestore"
import $ from "jquery"

Home.getInitialProps = async (ctx) => {
    return { name : ctx.query.name }
}

export default function Home({ name }) {
    const [text, setText] = useState([])
    const [msg, setMsg] = useState("")
    const [lastmsg, setLastmsg] = useState("")

    const sdk = require("microsoft-cognitiveservices-speech-sdk");
    // const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");

    useEffect(() => {
        $("#messagebody").scrollTop($("#messagebody")[0].scrollHeight)
      })

    useEffect(async() => {
        var db = fire.firestore()
        let data_message = []
        let chatid = "1-2"
        var text
        await db.collection("chat").doc(chatid).onSnapshot(function(doc) {
            setText(doc.data().messages)
        })
      }, []);

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

    // const passtext = async() => {
    //     var data
    //     console.log("get data")
    //     await axios.get("https://unmuteapi.azurewebsites.net/receive_text")
    //     .then((resp) => {
    //         data = resp.data
    //     })
    //     .catch((error) => {})
    //     .finally(() => {})
    //     if(data != lastmsg && data != undefined){
    //         var obj = { msg: data, user: 0}
    //         var teks = [...text, obj];
    //         // teks.concat(obj)
    //         aa(data)
    //         console.log(data)
    //         console.log(lastmsg)
    //         setText(teks)
    //         setLastmsg(data)
    //     }
    // }

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
    const SynthesizeSpeechWithParameter = (message) => {
        const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");
        const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
    
        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
            message,
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
        var code = event.keyCode || event.which
        if (code === 13 && msg !== "") {
            // await synthesizeSpeech()
            var db = firebase.firestore()
            setMsg("")
              var data = {
                from: name,
                message: msg,
                timestamp: Date.now(),
              }
              
              let chatid = "1-2"
              await db
                .collection("chat")
                .doc(chatid)
                .update({
                  messages: firebase.firestore.FieldValue.arrayUnion(data),
                })
        }
      }

      const DefaultMessage = async(message) => {
        // await SynthesizeSpeechWithParameter(message)
        var db = firebase.firestore()
              var data = {
                from: name,
                message: message,
                timestamp: Date.now(),
              }
              
              let chatid = "1-2"
              await db
                .collection("chat")
                .doc(chatid)
                .update({
                  messages: firebase.firestore.FieldValue.arrayUnion(data),
                })
      }

      const GetTimeStamp = (date) => {     
        var myDate = new Date(date)
        var minutes = myDate.getMinutes()
        var hour = myDate.getHours()
        if(minutes < 10){
            minutes = "0" + minutes 
        }
        if(hour < 10){
            hour = "0" + hour
        }
        return hour + ":" + minutes
      }

    return (
        <Style>
            <div className="topnavbar">
                <div className="navbar">
                    <img src="logo_v1 1.png" className="imagelogo" /> 
                </div>
                <div className="navbartext">
                    <div className="navbarteks">Feedback</div>
                    <div className="navbarteks navbardesc">Settings</div>
                    <div className="navbarteks navbardesc">About Us</div>
                    <div className="navbarteks navbardesc loginbox">Sign out</div>
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

                    <div className="usersegment">
                        Meeting with Friends
                    </div>

                    {/* <div className="usersegment">
                        Lorem Ipsum
                    </div>

                    <div className="usersegment">
                        Lorem Ipsum
                    </div> */}
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
                            <div className="chatt" id="messagebody">
                                {text.map((data, index) => (
                                    <div>
                                        {data.from == name ? 
                                            <div className="rightchatbubble" key={index}>
                                            <div className="bubblechat rightbubblechat">
                                                <div className="bubblename">{data.from}</div>
                                                <div>
                                                    {data.message}
                                                </div>
                                                <div className="time timeleft">
                                                    {GetTimeStamp(data.timestamp)}
                                                </div>    
                                            </div>
                                        </div>
                                        :
                                        <div className="bubblechat leftbubblechat"> 
                                            <div className="bubblename">{data.from}</div>
                                            <div>
                                                {data.message}
                                            </div>
                                            <div className="time ">
                                                {GetTimeStamp(data.timestamp)}
                                            </div>    
                                        </div>
                                        }
                                    </div>
                                ))}
                            </div>
                            <div className="typeboxwrapper">
                                <textarea className="inputuser" value={msg} onChange={(e) => setMsg(e.target.value)}
                                onKeyPress={EnterMessage}
                                ></textarea>
                            </div>
                        </div>
                        <div className="rightchatsection">
                            <div className="rightbox" onClick={() => DefaultMessage("Excuse Me, I would like to talk")}>
                                <div className="topbox">
                                    Excuse Me
                                </div>
                                <div className="boxdesc">
                                    Excuse Me, I would like to talk
                                </div>
                            </div>
                            <div className="rightbox" onClick={() => DefaultMessage("Hello, nice to meet you all")}>
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
