import React from "react"
import { tempoParaSegundos } from "../../../common/utils/date"
import style from './Relogio.module.scss'

export default function Relogio(){
    console.log('conversao: ', tempoParaSegundos('01:01:01'))
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