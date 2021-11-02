import React from 'react'

export const Exp = (props) => {

    const { exp } = props

    return (
        exp.map((e, i) => {
            return (
                <div>
                    <ul>
                        <li><span className="strong">{e.titre}</span><br/>
                            <span>{e.Année}</span>
                            <p className="desc-ex-p" >{e.desc}</p>
                        </li>
                    </ul>
                </div>
            )
        })
    )
}
