import React from 'react'

const Music = ({title,artist,url,price}) => {
  return (

    <div>
        <h3 style={{ color:'blueviolet' , fontSize: 30 }}>{title}</h3>
        <h3>{artist}</h3><br/>
        <h3>{price}</h3>
        <img style={{ objectFit:'contain' ,height:200 ,width : 300 ,padding:10}} src={url} alt="" />
    </div>
   
  )
}

export default Music