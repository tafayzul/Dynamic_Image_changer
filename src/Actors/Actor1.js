import React,{useState,useEffect} from 'react';
import '../Images/SalmanKhan.jpg';
import '../Images/Saif.jpg';
import '../Images/SRK.jpg';

function Actor1(props) {
  const headStyle ='text-align:center;color:bisque;-webkit-text-stroke: 1px'
  const listStyle = 'width:70%;margin:auto;display:flex;justify-content:space-around'
  const ulStyle = 'list-style-type:none;padding:0;text-align:center'
  const liStyle = 'font-size:18px;padding:10px;font-family:cursive'
  const btnDivStyle = {
    width:'500px',
    textAlign:'center',
    margin:'20px auto',
    WebkitTextStroke: '1px #000',
  }
  const btnStyle = {
    width:'100%',
    padding:'10px',
    cursor:'pointer',
    fontSize:'20px',
    fontWeight:'900',
    background:'linear-gradient(to right, #d17c7c, #6969de, #92daac)',
    color:'rgb(235 231 188)',
  }
  const [newTab, setNewTab] = useState(null);
  
  const handleOpenNewTab = () => {
    setNewTab(window.open("about:blank", "_blank"));
  }

  useEffect(() => {
    if(newTab) { 
    newTab.document.write(
      `<div style="background: linear-gradient(to right, #CBBACC, #2580B3, #247BA0);height:110vh";>
      <h1 style=${headStyle}>${props.text}</h1>
      <img src=${props.src} alt=${props.alt} width=${600} height=${400} style="margin:0 auto;display:block"/>
      <p style="${props.color};width:70%;margin:0 auto;font-size:22px;font-family:cursive">${props.text} ${props.para} </p>
      <div style=${listStyle}>
        <ul style=${ulStyle}>
        <span style="font-size:20px;color:bisque;-webkit-text-stroke: 1px">Best Movies Of ${props.text}</span>
        ${props.best.map((movie,index)=>{
          return `<li style="${liStyle};${props.color}" key=${index}>${movie}</li>`
        }).join('')}
        </ul>
        <ul style=${ulStyle}>
        <span style="font-size:20px;color:bisque;-webkit-text-stroke: 1px">Worst Movies Of ${props.text}</span>
        ${props.worst.map((movie,index)=>{
          return `<li style="${liStyle};${props.color}" key=${index}>${movie}</li>`
        }).join('')}
        </ul>
      </div>
      </div>`
     );
    newTab.document.close();
    }
    }, [newTab, props,headStyle]);
  return (
     <div style={btnDivStyle} >
       <button style={btnStyle} onClick={handleOpenNewTab}>Click For More</button>
     </div>
    );
}

export default Actor1;