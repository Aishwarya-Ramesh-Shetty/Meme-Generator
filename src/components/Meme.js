import React from 'react'
import "../App.css"
import MemesData from '../MemesData'

const Meme = () => {

  const [memeImage,setMemeImage]=React.useState("")
  const [topText,setTopText]=React.useState("")
  const [bottomText,setBottomText]=React.useState("")

  function getMemeImage() {
    const memesArray=MemesData.data.memes
    const randomnum=Math.floor(Math.random() * memesArray.length)
    const url=memesArray[randomnum].url
    setMemeImage(url)
    console.log(url)

  }
  return (
    <main>
        <div className='form'>
            <
                input type="text"
                placeholder="Top Text"
                className="form--input" 
                value={topText}
                onChange={(e)=> setTopText(e.target.value)}
            
            />
            <
                input type="text" 
                placeholder="Bottom Text"
                className="form--input"
                value={bottomText}
                onChange={(e)=> setBottomText(e.target.value)}

            />
            <button 
              className='form--button' 
              onClick={getMemeImage}
            >
              Get a new Image &#xF42B; 
            </button>
        </div>
        <div className='container'>
          <img src={memeImage} className='image'/>
          <h1 className='top'>{topText}</h1>
          <h1 className='bottom'>{bottomText}</h1>
          

        </div>
        
        
    </main>
  )
}

export default Meme;