import React,{useState} from 'react';
import ani1 from '../imgs/ani1.svg';
import li_in from '../imgs/linked.svg';
import twitter from '../imgs/twitter.svg';
import insta from '../imgs/insta.svg';
import ani3 from '../imgs/ani3.svg';
import ani2 from '../imgs/ani2.svg';
import burger from '../imgs/burger.svg';
import './Header.css';
import Adopt from './forms/Adopt';
import Footer from './Footer';
function Header() {
  const [adopt,setAdopt]=useState(false)
  const [giveaway,setGiveaway]=useState(false)
  const [petlist,setPetlists]=useState(false)
  const scrolltoBottom = () =>{
    window.scrollTo({
      top: 1200, 
      behavior: 'smooth'
    });
  };
  const adoptOrgiveaway=(type)=>{
       if(type==="adopt"){
        setAdopt(true)
       }else{
        setGiveaway(true)
       }
  }
  const popupClose=(closetype)=>{
    if(closetype==="adopt"){
    setAdopt(false)
    }else if(closetype==="giveaway"){
    setGiveaway(false)
    }else if(closetype==="pets"){
      setPetlists(false)
    }
  }

return (
  <><div className='popups'> <Adopt trigger_adopt={adopt} trigger_giveaway={giveaway} popupClose={popupClose}
   trigger_dog={petlist}></Adopt></div>
    <div className='headerdiv'>
        {/* navbar */}
    <div className='navbar'>
    <div className='navdiv1'>
    <img src={ani1} alt="img1"></img>
    <h1>ANIMAL SHELTER</h1>
    </div>
    <div className='navdiv2'>
      <h2>Home</h2>
      <h2 onClick={scrolltoBottom}>Contact Us</h2>
    </div>
    <div className='navdiv3'>
      <img className='linksimg' src={li_in} alt="linked in"></img>
      <img className='linksimg' src={twitter} alt="twitter"></img>
      <img onClick={()=>setAdopt(false)&setGiveaway(false)} className='linksimg' src={insta} alt="instagram"></img>
      <img className='burger' src={burger} alt="Hameburger"></img>
    </div>
   </div>
    {/* contents */}
    <div className='content1'>
        <div className='content1-left'>
        <h1> Welcome to the Animal Shelter !</h1>
        <h2>
            Glad that you care for the animals so much.
            We make sure that you’ll not repent your decision of adopting your favorite pet !!
        </h2>
        <img className='content1-leftimg' src={ani2} alt="ani2img"></img>
        <button onClick={()=>adoptOrgiveaway("adopt")} className='btnadopt'>Adopt</button>
        <button onClick={()=>setPetlists(true)} className='btnpets'>What all pets do we have ?</button>
        </div>
        <div className='content1-right'>
            <img src={ani2} alt="ani2img"></img>
        </div>
    </div>
    <div className="content2">
      <h1>We do take in pets if you can’t take care of them !</h1>
      <h2>Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef
          efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf
          wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes
          efjebsf beskdb efkjebf fbwekjsf bkewb</h2>
      <button onClick={()=>setGiveaway(true)}>Give Away</button>
    </div>
    <div className='content3'>
      <img src={ani3} alt="ani3img"></img>
      <h2>
           Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef
          efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf
          wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes
          efjebsf beskdb efkjebf fbwekjsf bkewb
      </h2>
    </div>
   </div>
   <Footer footerAdopt={adoptOrgiveaway}></Footer>
   </>
  )
}

export default Header;