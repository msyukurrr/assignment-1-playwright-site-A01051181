import Head from "next/head"
import styles from '../styles/Home.module.css'
import HamMenu from "../components/hammenu"
import { useState, useEffect } from "react"
import { validEmail, validFirstName, validLastName } from './api/Regex.js';

export default function Contact(){

    const [displayButton, setDisplayButton] = useState(false);
    const [fName, setFName] = useState('');
    const [fNameErr, setFNameErr] = useState('');
    const [lName, setLName] = useState('');
    const [lNameErr, setLNameErr] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        if (!validEmail.test(email) & email.length > 1){
            setEmailError(true);
        }
        if (validEmail.test(email)){
            setEmailError(false);
        }
        if (!validFirstName.test(fName) & fName.length > 1){
            setFNameErr(true);
        }
        if (validFirstName.test(email)){
            setFNameErr(false);
        }
        if (!validLastName.test(lName) & lName.length > 1){
            setLNameErr(true);
        }
        if (validLastName.test(lName)){
            setLNameErr(false);
        }
    })

    useEffect(() => {
        if (validEmail.test(email) & validFirstName.test(fName) & validLastName.test(lName)){
            setDisplayButton(true);
        }
    })
    

    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>
        <HamMenu/>

        <main classname={styles.contactMain}>

            <div style={{display:'inline-block'}}>
                <h1 className={styles.contactHeading}>Contact Us</h1>
            </div>

            <div>
                <p>Want to discuss? Let's chat!</p>
            </div>

            <div>
                <form className={styles.contactForm}>
                    <fieldset style={{paddingLeft: '10%', paddingRight:'10%'}}>
                        <table className={styles.table}>
                            <thead style={{fontWeight:'bold'}}> First Name:
                                <tr>
                                    <input id={styles.firstName}
                                    type="first name"
                                    value={fName}
                                    placeholder="First Name Here"
                                    onChange={(e) => setFName(e.target.value)}>
                                    </input>

                                    <h4>Email:</h4>
                                    <input id={styles.email}
                                    type="email"
                                    value={email}
                                    placeholder="Email Here"
                                    onChange={(e) => setEmail(e.target.value)}>
                                    </input>
                                </tr>
                            </thead>

                            <thead style={{fontWeight:'bold', marginLeft: 20}}>Last Name:
                                <tr>
                                    <input id={styles.lastName}
                                    type="last name"
                                    value={lName}
                                    placeholder="Last Name Here"
                                    onChange={(e) => setLName(e.target.value)}>
                                    </input>
                                </tr>
                            </thead>

                        </table>
                    </fieldset>

                    {displayButton && <Link href='/'><button className={styles.contactButton}>Submit</button></Link>}
                    {emailError && <p style={{color:'red'}}>Your email is invalid</p>}
                    {fNameErr && <p style={{color:'red'}}>First name error. First letter must be capital. Must use alphabets only.</p>}
                    {lNameErr && <p style={{color:'red'}}>Last name error. First letter must be capital. Must use alphabets only.</p>}
                </form>
            </div>

        </main>


        <a href='/about'>
            <span className={styles.homeArrow}>
            <img src="/icons/upwardArrow.png" style={{width:30, height: 40}}/>
            </span>
        </a>

        </div>
        </>
    )
}