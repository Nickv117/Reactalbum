import React, { useEffect, useState } from "react"
import { albumsFetch } from "../actions/Albumbuild"
import { Link } from "react-router-dom"

export default props => {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    albumsFetch().then(data => setAlbums(data))
  }, [props.match.params])
  return (
    <div className="container">
      <h1 className="albumHead">Things I Like</h1>
      <ul className="albums">
        {albums.map(albums => (
          <li key={"Album" + albums.id}>
            {albums.name}
            <br />
            <Link to={"/albums/" + albums.id}>
              <img className="albumCover" src={albums.cover} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
