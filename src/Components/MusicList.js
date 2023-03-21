import React ,{useState,useContext}from 'react'
import Music from './Music'
import { MovieContext } from './MovieContext'
const MusicList = () => {
    const [musics ,setMusics]= useContext(MovieContext)
  return (
    <div className='musicList'>

     {musics.map((music)=>(
    
        <Music title={music.title} artist={music.artist} price={music.price} url={music.url} key={music.id}/>
     
     ))}


    </div>
  )
}

export default MusicList