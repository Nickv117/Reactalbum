import React, { useEffect, useState } from "react"
import { albumFetch, getalbumList } from "../actions/Albumbuild"
import { Link } from "react-router-dom"

export default props => {
  const [album, setAlbum] = useState({})
  const [albumList, setAlbumlist] = useState([])
  const [pic, setPic] = useState([])
  useEffect(() => {
    albumFetch().then(e => {
      setAlbum(e)
      setPic(e.pic)
    })
    getalbumList().then(e => {
      setAlbumlist(e)
    })
  }, [props.match.params])

  return (
    <div>
      <Link to={"/"}>
        <button className="home">Home</button>
      </Link>
      <h1 className="nameOfAlbum">{album.name}</h1>

      <ul className="albumList">
        {albumList.map(e => (
          <li key={"album" + e.id}>
            <Link to={"/albums/" + e.id}>{e.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="picList">
        {pic.map(pic => (
          <li className="picDisplay" key={"pic" + pic.id}>
            {pic.name}
            <br />
            <Link to={`/picture/${pic.id}`}>
              <img src={pic.url} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
