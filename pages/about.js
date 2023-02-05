import styles from '../styles/Home.module.css'
import ImageSlider from "../components/imageSlides";
import { ImagesD } from "../components/data/images";
import HamMenu from '../components/hammenu';
import Arrows from '../components/arrowicon';
import Head from 'next/head';


export default function About(){

    return (
        <div className={styles.aboutContainer}>
            <Head>
                <title>About Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property="og:title" content="Assignment #1 - About Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>

        <HamMenu/>

        <Arrows up='/' down='/contact'/>

        <main className={styles.aboutMain}>

        <div style={{display:'inline-block'}}>
          <h1 className={styles.aboutHeading}>About Us</h1>
        </div>

            <div>
                <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
            </div>
            <div>
                <p>Our students gain the technical skills, real-world experience, and problem solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
            </div>
            <div>
                <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>
            </div>

        <div>
          <h2>Information Sessions</h2>
        </div>

            <div>
                <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>
            </div>

        <div>
            <h3>Big Info</h3>
        </div>

            <div>
                <p>Big info is the largest program expo and information session at BCIT. It's your chance to find out about all of our programs - from business, computing, and health to engineering, trades and applied sciences.</p>
            </div>
            <div>
                <p>If you missed our fall event, the next Big info is scheduled to return on February 15, 2023.</p>
            </div>

            <div>
                <h2>Campus Tours</h2>
            </div>
            <div>
                <p>Tours runs weekdays September to Map, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
            </div>
       
      
        <div id={styles.carouselImage}>
          <ImageSlider slides={ImagesD}/>
        </div>

        <div style={{display:'inline-block'}}>
          <h1 className={styles.aboutHeading}>Departments</h1>
        </div>
         
          <ul style={{display:'flex', justifyContent:'center', lineHeight:2, flexDirection: 'column'}}>
                <li>Applied & Natural Sciences</li>
                <li>Business & Media</li>
                <li>Computing & IT</li>
                <li>Engineering</li>
                <li>Health Sciences</li>
                <li>Trades & Apprenticeships</li>
          </ul>
    
        </main>

        </div>
    )
}