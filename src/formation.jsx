import React from 'react'
import ReactDOM from 'react-dom'

export const Formation = (props) => {

    const { formations } = props

    return (
        formations.map((e, i) => {
            return (
                <div>
                    <ol>
                        <span className="strong">{e.titre}</span><br/>
                        <span>{e.Année}</span>
                        <p className="desc-ex-p" >{e.desc}</p>
                    </ol>
                </div>
            )
        }
        )
    )
}
