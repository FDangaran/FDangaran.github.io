import React, { Component } from 'react';
import NavBar from './NavigationBar'
import Body from './Body'

export default class Homepage extends Component {
  render () {
      return (
        <container>
          <NavBar />
          <Body />
        </container>
      )
  }
}