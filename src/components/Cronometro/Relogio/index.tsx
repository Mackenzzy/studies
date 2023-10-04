import React from "react"
import { tempoParaSegundos } from "../../../common/utils/time"
import style from './Relogio.module.scss'

export default function Relogio(){
    return(
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>

    )
}