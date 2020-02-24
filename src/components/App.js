import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import AlbumList from "./AlbumList"
import Album from "./Album"
import Photo from "./Photo"

export default props => (
  <Router>
    <div className="container">
      <Route exact path="/" component={AlbumList} />
      <Route path="/albums/:id" component={Album} />
      <Route path="/picture/:id" component={Photo} />
    </div>
  </Router>
)
