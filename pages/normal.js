import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Style } from "../styles/guest"
import axios from 'axios';
import fire from "../config/fire-config"
import firebase from "firebase/app"
import "firebase/firestore"

export default function Home({ InitText }) {
    const [text, setText] = useState([])
    const [lastmsg, setLastmsg] = useState("")
    const [button, setButton] = useState(true)

    useEffect(async() => {
        var db = fire.firestore()
        let data_message = []
        let chatid = "1-2"
        var text
        await db.collection("chat").doc(chatid).onSnapshot(function(doc) {
            setText(doc.data().messages)
        })
      }, []);

    const sdk = require("microsoft-cognitiveservices-speech-sdk");
    const speechConfig = sdk.SpeechConfig.fromSubscription("a0920a51bd144d94b7011c724526afb2", "eastus");

    const sendMessage = async (id, msg) => {
        if (msg == "") {
          return
        }
        var db = firebase.firestore()
        var data = {
          from: coachID,
          message: msg,
          timestamp: Date.now(),
        }
        
        let chatid = coachID + "-" + id
        await db
          .collection("chats")
          .doc(chatid)
          .update({
            messages: firebase.firestore.FieldValue.arrayUnion(data),
          })
        await getMessages(id)
        setUserMessage("")
      }

    const fromMic = async() => {
        setButton(false)
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
                from: "1",
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

            <div className="midwrapper">
                {text.map((data, index) => (
                    <div>
                        {data.from == 1 ? 
                            <div className="rightchatbubble" key={index}>
                                <div className="bubblechat rightbubblechat">
                                    {data.message}
                                </div>
                            </div>
                        :
                        <div className="bubblechat leftbubblechat"> 
                            {data.message}
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
