import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <>
        <div className="intituler">
        <h1>Alexandre Touchet</h1>
        <h2>Développeur web et web mobile</h2>
        </div>
        <div className="container">
            <div className="row">

                <div className="main col-9">
                    <div className="information col-4">
                        <h4>Information personnelle</h4>
                        <p>🖨 alexandre.pro3525@gmail.com</p>
                        <p>📞 06 20 65 33 63</p>
                        <p>🎁 21 ans</p>
                        <p className="strong"><a href="https://www.linkedin.com/in/alexandre-touchet-6902401b9/" target="_blank" rel="noopen">Linkedin</a></p>
                        <div className="space-20"></div>
                        <h4>Langues</h4>
                        <p>Français</p>
                        <p>Anglais</p>
                        <div className="space-20"></div>
                        <h4>Loisirs</h4>
                        <ul>
                            <li>Manga, Animé</li>
                            <li>Jeux vidéo</li>
                            <li>nouvelle technologie</li>
                        </ul>
                    </div>
                    <div className="sous-main col-12">
                        <hr />
                        <h3 className="comp">Compétence</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>PHP</li>
                                <li>JS / JSX</li>
                                <li>SQL</li>
                            </ul>
                        <hr />
                        <h3 className="ex-p">Expériences professionnelles</h3>
                            <ul>
                                <li><span className="strong">Inhalio</span><br/>
                                    <span>mars 2021 - mai 2021</span>
                                    <p className="desc-ex-p" >Développer un système de template d'email automatique.</p>
                                </li>
                                <li><span className="strong">papilhorig</span><br/>
                                    <span>mars 2019 - mai 2019</span>
                                    <p className="desc-ex-p" >concevoir un site e-commerce de noued papillion sous Sylius.</p>
                                </li>
                                <li><span className="strong">Micro-contact</span><br/>
                                    <span>octobre 2016 - novembre 2016</span>
                                    <p className="desc-ex-p" >Maintenance et dépannage informatique.</p>
                                </li>
                            </ul>
                        <hr />
                        <h3 className="formation">Formation</h3>
                            <ol>
                                <span className="strong">BTS</span><br/>
                                <span>juillet 2021</span>
                                <p className="desc-ex-p" >Développeur web et web mobile (fullstack)</p>
                            </ol>
                            <ol>
                                <span className="strong">BAC Pro SEN option AVM</span><br/>
                                <span>juin 2018</span>
                                <p className="desc-ex-p" >Système Électronique Numérique spécialité Audio Visuel Multimédia</p>
                            </ol>
                            <ol>
                                <span className="strong">BEP SEN</span><br/>
                                <span>juin 2017</span>
                                <p className="desc-ex-p" >Système Électronique Numérique</p>
                            </ol>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
