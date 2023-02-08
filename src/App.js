import React,{useState} from 'react';
import './App.css';
import Actor1 from './Actors/Actor1';
import '../src/Images/SRK.jpg';
import "../src/Images/SalmanKhan.jpg";
import "../src//Images/Saif.jpg";
import "../src/Images/Aamir.jpg"

function App() {
  const divStyle = {
    height:'100vh',
    background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c',
  }
  const imgStyle = {
    position:'relative',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-evenly',
  }
  const headingStyle = {
    textAlign:'center',
    color:'#456fbc',
    WebkitTextStroke: '1px #000'
  }
  const images = [
    {
      src: require("../src/Images/SRK.jpg"),
      alt: "SRK",
      text: 'Shah Rukh Khan',
      color: 'text-align:center;color:white',
      para:' born(2 November 1965), also known by the initialism SRK, is an Indian actor and film producer who works in Hindi films. Referred to in the media as the "Baadshah of Bollywood" and "King Khan"',
      best:['Pathan','Veer Zara','Devdas'],
      worst:['Zero','Duplicate','Fan']
    },
    {
      src: require("../src/Images/SalmanKhan.jpg"),
      alt: "SK",
      text: 'Salman Khan',
      color: 'text-align:center;color:#534141;',
      para:' born(27 December 1965)[2] is an Indian actor, film producer, and television personality who works predominantly in Hindi films. In a film career spanning over thirty five years',
      best:['Ek Tha Tiger','Bajrangi Bhaijaan','Sultan'],
      worst:['Race 3','Prem Ratan Dhan Payo','TubeLight']
    },
    {
      src: require("../src/Images/Saif.jpg"),
      alt: "SAK",
      text: 'Saif Ali Khan',
      color: 'text-align:center;color:#00415b',
      para:' born Sajid Ali Khan Pataudi; 16 August 1970)[1] is an Indian actor and film producer who works in Hindi films. Part of the Pataudi family, he is the son of cricketer Mansoor Ali Khan Pataudi.',
      best:['Love Aaj Kal','Dil Chahta Hai','Cocktail'],
      worst:['Phantom','Bullet Raja','Agent Vinod']
    },
    {
      src: require("../src/Images/Aamir.jpg"),
      alt: "AMR",
      text: 'Aamir Khan',
      color: 'text-align:center;color:#5f2585',
      para:' born Mohammed Aamir Hussain Khan; 14 March 1965) is an Indian actor, film director and producer who works in Hindi films. Through his career spanning over 30 years, Khan has established himself as one of the most notable actors of Indian cinema.',
      best:['Dangal','PK','Ghajini'],
      worst:['Mela','Thugs Of Hindostan','Laal Singh Chaddha']
    }
  ];
  const [selectedImage,setSelectedImage] = useState(null);
  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>Bollywood Actors</h1>
      <div style={imgStyle}>
        {images.map((image)=>{
          return (
              <img 
              key={image.src}
              src={image.src}
              alt={image.alt} 
              width={500}
              height={300}
              onClick={()=>{(setSelectedImage(image))}}/>     
        )})}
      </div>
      <>
        {selectedImage != null && 
          <Actor1 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          text={selectedImage.text}
          color={selectedImage.color}
          para={selectedImage.para}
          best={selectedImage.best}
          worst={selectedImage.worst}
          />
        }
      </>
    </div>
  );
}

export default App;