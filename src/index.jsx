import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <>
        <div className="intituler">
        <h1>Alexandre Touchet</h1>
        <h2>Développeur web et web mobile</h2>
        </div>
        <h3 className="information">Information</h3>
        <h3 className="main">Compétence</h3>
        <h3 className="main">Expériences professionnelles</h3>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
