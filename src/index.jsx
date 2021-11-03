import React from 'react'
import ReactDOM from 'react-dom'

import data from '../data.json'

import '../public/assets/css/main.css'
import { Exp } from './ex_p'
import { Formation } from './formation'
import { MenuL } from './menu_gauche'
import { Competence  } from './competence'

const App = () => {

    return (
        <>
            <div className="intituler">
                <h1>Alexandre Touchet</h1>
                <h2>Développeur web et web mobile</h2>
            </div>
            <div className="row">
                <div className="main col-9">
                    <div className="information col-4">
                        <MenuL 
                            info={data.INFO_PERSO}
                        />
                    </div>
                    <div className="space-200" style={{display: screen >= 600 ? 'block': 'none'}}></div>
                    <div className="sous-main col-12">
                        <hr />
                        <h3 className="comp">Compétence</h3>
                        <ul className="progress-ul">
                            <Competence />   
                        </ul>
                        <hr />
                        <h3 className="ex-p">Expériences professionnelles</h3>
                            <Exp 
                                exp={data.EX_PRO}
                            />
                        <hr />
                        <h3 className="formation">Formation</h3>
                            <Formation 
                                formations={data.FORMATION}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))