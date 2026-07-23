import { useState } from "react"

function SeeFav(){

    const artists = [
    {name:"J cole", genre:"Hiphop", id:1},

    {name:"kendrick lamar", genre:"Hiphop", id:2},

    {name:"drake", genre:"Hiphop", id:3},

    {name:"madilu system", genre:"rhumba", id:4}
  ]
const [visibleArtist, setVisibleArtist] = useState([])

  function ClickArtist(){
    setVisibleArtist(artists)

  

  }

  return <>
  <div>Hey boy see My fav Artists</div>
  <button onClick={ClickArtist}>My Liked</button>

  <ul>
    {visibleArtist.map(artist =>
      <li key={artist.id}>
        {artist.name}
      </li>
    )}
  </ul>
  </>

  

}


function Artist(){

  const artists = [
    {name:"J cole", genre:"Hiphop", id:1},

    {name:"kendrick lamar", genre:"Hiphop", id:2},

    {name:"drake", genre:"Hiphop", id:3},

    {name:"madilu system", genre:"rhumba", id:4}
  ]
  const artistList  = artists.map(artist => 
    <li key={artist.id}
    style={{
      color:"blue"
    }}>
      {artist.name}
    </li>
  )

  return <>
  <div>
    <h3>Favorite artist list</h3>
    <ul>{artistList}</ul>
  </div>
  </>

}
 

function App() {

  return <>
  <Artist />
  <SeeFav />
  </>
  
}

export default App
