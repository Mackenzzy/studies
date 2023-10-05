import react from 'react';
import style from './Botao.module.scss';

interface Props {
    children: React.ReactNode;
  }
class Botao extends react.Component<React.PropsWithChildren<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}>>{
    render(){
        const {type ="button", onClick}  = this.props;

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
            <button type={type} onClick={onClick} className={style.botao} >
                {this.props.children}
            </button>
        )
    }
}

export default Botao;