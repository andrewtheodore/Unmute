import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Style } from "../styles/guest"
import axios from 'axios';
import fire from "../config/fire-config"
import firebase from "firebase/app"
import "firebase/firestore"
import { useRouter } from 'next/router'
import $ from "jquery"

Home.getInitialProps = async (ctx) => {
    return { name : ctx.query.name }
}

export default function Home({ name }) {
    console.log(name)
    const [text, setText] = useState([])
    const [lastmsg, setLastmsg] = useState("")

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
            var p = doc.data().messages.length
            if(p > 0){
                synthesizeSpeech(doc.data().messages[p - 1].message)
            }
        })
      }, []);

    const sdk = require("microsoft-cognitiveservices-speech-sdk");
    const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");

    const fromMic = async() => {
        let audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
        let recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
        var data = ""
        
        console.log('Speak into your microphone.');
        recognizer.recognizeOnceAsync(async (result) => {
            data = `${result.text}`
            var res = `${result.text}`

            if (res == "") {
                return
              }
              var db = firebase.firestore()
              var data = {
                from: name,
                message: res,
                timestamp: Date.now(),
              }
              
              let chatid = "1-2"
              await db
                .collection("chat")
                .doc(chatid)
                .update({
                  messages: firebase.firestore.FieldValue.arrayUnion(data),
                })
        });
    }

    const synthesizeSpeech = (mess) => {
        const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");
        const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
    
        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
            mess,
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
        <Style >
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

            <div className="midwrapper" id="messagebody">
                {text.map((data, index) => (
                    <div>
                        {data.from == name ? 
                            <div className="rightchatbubble" key={index}>
                                <div className="bubblechat rightbubblechat">
                                    <div className="bubblename">{data.from}</div>
                                    <div>
                                        {data.message}
                                    </div>
                                    <div className="time  timeleft">
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
                            <div className="time">
                                {GetTimeStamp(data.timestamp)}
                            </div>    
                        </div>
                        }
                    </div>
                ))}
            </div>
            <div className="bottomwrapper">
                <div className="id">
                    ID: 471232327
                </div>
                <div className="">
                    <div className="nottalkingbutton">
                        <img src="mic.png" className="micimage" onClick={() => fromMic()} />
                    </div>
                </div>
                <div className="leavemeeting">
                    Leave Meeting
                </div>
            </div>
        </Style>
  )
}
