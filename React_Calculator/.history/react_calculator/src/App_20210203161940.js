import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="calc-wrapper">
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>

          </div>
            <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button></Button>
            
          </div>
            <div className="row">
            <Button>7</Button>
            <Button>7</Button>
            <Button>7</Button>
            <Button>7</Button>
            
          </div>

      </div>
         
      </div>
    )
  }
}
