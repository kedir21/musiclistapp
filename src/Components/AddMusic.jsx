import React ,{useState,useContext}from 'react'
import { MovieContext } from './MovieContext'


const AddMusic = () => {
    const [musics , setMusics]= useContext(MovieContext)
    const [title , setTitle] =useState('');
    const [price , setPrice] =useState('');
    const [url, setUrl] =useState('');
    const [artist , setArtist] =useState('');

const updateTitle=(e)=> {
    setTitle(e.target.value);
}
const updatePrice=(e)=> {
    setPrice(e.target.value);
}
const updateUrl=(e)=> {
    setUrl(e.target.value);
}
const updateArtist=(e)=> {
    setArtist(e.target.value);
}
const addMusic = e =>{
    e.preventDefault();
    setMusics(prevMusics =>  [...prevMusics,{title:title , price:price  , url:url , artist:artist}]);

}

  return (
    <form onSubmit={addMusic} id='form'> 
            <h2>Add New Music</h2>
            <label>Title</label><br/>
            <input type="text" name="title" value={title} onChange={updateTitle}/><br/>
            <label>Price</label><br/>
            <input type="text" name="price" value={price}onChange={updatePrice}/><br/>
            <label>Image Url</label><br/>
            <input type="text" name="url" value={url}onChange={updateUrl}/><br/>
            <label>Artist</label><br/>
            <input type="text" name="artist" value={artist}onChange={updateArtist}/>
            <br/>
            <br/>
            <button>
                summit
            </button>


    </form>
  )
}

export default AddMusic