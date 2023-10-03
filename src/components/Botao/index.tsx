import react from 'react';
import style from './Botao.module.scss';

class Botao extends react.Component{
    render(){
        //formas de colocar as variaveis:
        //const color = 'red'; chama a variavel color dentro do style>backgroundColor
        //const backgroundColor= 'blue'; nesse caso vc não coloca valor na backgroundColor, pq o valor ja foi determinado na variavel
        //const estaAtivo = true;
        //const backgroundColor = 'green'
        //const styles ={
            //usando if sem if pq esta dentro da variavel, usando valor booleano style={styles}
            
            //backgroundColor: estaAtivo ?"green":"red"
        //}
        return(
            <button className={style.botao} >
                botão
            </button>
        )
    }
}

export default Botao;