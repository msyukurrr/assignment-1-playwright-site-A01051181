import { useState } from "react";

export default function HamMenu() {
    const [displayMenu, setDisplayMenu] = useState(false);

    const handlerClick = () => {
        setDisplayMenu(current => !current);
    }

    return <>
    <div style={{ display: 'flex', justifyContent:'space-between', position:'fixed', width: '100%', marginTop:25 }}>
        <img src="/icons/menu-icon.png" onClick={handlerClick} style={{display:'flex', top:0, left:0, margin:15, height:35, width: 35}}/>
        <img src="/icons/graduation-hat.png" style={{ width: 50, height: 50, margin:10, marginRight:60 }} />
    </div>

    <div style={{display: displayMenu ? 'flex' : 'none', top:50, left:20, position:'fixed'}}>
        <img src='/background-images/menuBackground.png' style={{position:'absolute', height: 200, width: 200, top:-45, left: -15}}/>
        <h1 onClick={handlerClick} style={{zIndex:2}}>X</h1>
        <ul style={{display:'flex', flexDirection:'column', lineHeight: 2, zIndex:1}}>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
        </ul>
    </div>
    </>
}

