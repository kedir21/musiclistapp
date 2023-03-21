import React,{useState, createContext} from 'react'



export const MovieContext = createContext();

export const MovieProvider = props => {

    const [musics ,setMusics] = useState([
        {
            id:"1",
            artist:"Teddy Afro",
            title: "Ethiopia",
            price:"$300",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_q2GD3Zaa1UPQonPEaejflbzgaBDmEY6cng5LGu98YnQAEkMmoqGZfcQ&s"
        },
        {
            id:"2",
            artist:"Gossaye Tesfaye",
            title: "Siyamesh",
            price:"$200",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtoFyB-fa-ZUFXR0laoSA722uIMsaKyq5QhVargixJg&s"
        },
        {
            id:"3",
            artist:"Tamirat Desta",
            title: "Ewedshalew",
            price:"$300",
            url:"https://i.ytimg.com/vi/WjB3vNONHUM/maxresdefault.jpg"
        }
    
    ])
  return (
  <MovieContext.Provider value={[musics ,setMusics]}>
    {props.children}
  </MovieContext.Provider>
  )
}
