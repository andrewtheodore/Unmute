import Head from 'next/head'
import React, { useState } from 'react';
import { Style } from "../styles/login"
import Link from 'next/link'

export default function Home() {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    return (
        <Style>
        {edit && (
            <div>
                <div className="modal">
                    <div className="modal-content">
                        <div className="modaltitle">
                            Log in to your account
                        </div>
                        <input className="usernamebox"  placeholder="Username / Email"
                            value={username}
                            onChange={() => setUsername(event.target.value)}
                        />
                        <input className="usernamebox" placeholder="Password" type="password"
                        /> 
                        <div className="loginboxmodal">

                            <Link href={{
                                pathname: "/user",
                                query: { name: username },
                                }}>
                                    <div>
                                        Login
                                    </div>
                            </Link>
                        </div>
                        <div className="linecontainer">
                            <div className="line"></div>
                            <div className="or">Or</div>
                            <div className="line"></div>
                        </div>
                        <div className="appbutton">
                            <img src="/google.png" className="applogo"></img>
                            <div className="signin">
                                Sign in with Google 
                            </div>
                        </div>
                        <div className="appbutton">
                            <img src="/facebook.png" className="applogo"></img>
                            <div className="signin">
                                Sign in with Facebook 
                            </div>
                        </div>
                        <div className="appbutton">
                            <img src="/windows.png" className="applogo"></img>
                            <div className="signin">
                                Sign in with Microsoft Account 
                            </div>
                        </div>
                        <div className="account">
                            Don't have an account yet? Sign up here
                        </div>
                    </div>
                </div>
            </div>  
        )}
            <div className="topnavbar">
                <div className="navbar">
                    <img src="logo_v1 1.png" className="imagelogo" /> 
                </div>
                <div className="navbartext">
                    <div>Feedback</div>
                    <div className="navbardesc">Settings</div>
                    <div className="navbardesc">About Us</div>
                    <div className="navbardesc loginbox" onClick={() => setEdit(true)}>Login</div>
                </div>
            </div>
            <div className="loginbody">
                <div className="leftwrapper">
                    <div className="fullnametitle">
                        Enter your full name
                    </div>
                    <input placeholder="Full name" 
                    value={name}
                    onChange={() => setName(event.target.value)}
                    className="fullnameinput" />
                    <div className="meetingid">
                        Meeting ID
                    </div>
                    <input placeholder="Meeting ID" className="fullnameinput" />
                    <Link href={{
                          pathname: "/guest",
                          query: { name: name },
                        }}>
                        <a>
                            <div className="startbutton" href="guest.html">
                                Start
                            </div>
                        </a>
                    </Link>
                </div>
                <div>
                    <img src="image 12.png" className="rightimage" /> 
                </div>
            </div>
        </Style>
  )
}
