import React, { useEffect, useState } from "react"
import { albumPic } from "../actions/Albumbuild"
import { Link } from "react-router-dom"

export default props => {
  const [pic, setPic] = useState({})

  useEffect(() => {
    albumPic(props.match.params.id).then(resp => {
      setPic(resp)
    })
  }, [props.match.params])

  return (
    <div clasName="picSV">
      <Link to={"/"}>
        <button className="homebutton">Home</button>
      </Link>
      <h2 className="picTitle">{pic.name}</h2>
      <img src={pic.url} />
    </div>
  )
}
