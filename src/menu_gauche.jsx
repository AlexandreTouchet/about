import React from "react";

export const MenuL = (props) => {
    const { info } = props

    return (
        <div>
            {/* {JSON.stringify(info)} */}
            <h4>Information personnelle</h4>
                <p>{info.PRENOM}</p>
                <p>{info.NOM}</p>
                <p>🖨{info.EMAIL}</p>
                {/* <p>📞 {info.TELEPHONE}</p> */}
                <p>🎁 {info.AGE}</p>
                <p className="strong"><a href="https://www.linkedin.com/in/alexandre-touchet-6902401b9/" target="_blank" rel="noopen">Linkedin</a></p>
                <div className="space-20"></div>
                <h4>Langues</h4>
                {info.LANGUE.map((lang, i) => <p key={i}>{lang.titre}</p>)}
                <div className="space-20"></div>
                <h4>Loisirs</h4>
                <ul>
                    {info.LOISIRS.map((loisir, i) => <li key={i}>{loisir}</li>)}
                </ul>
        </div>
    )
}