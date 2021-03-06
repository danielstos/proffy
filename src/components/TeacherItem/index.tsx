import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';


function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/43411395?s=460&u=d9bc2bd1643012feda8ddbf6da9ce2ac59fd5cb1&v=4" alt=""/>
             <div>
                 <strong>Daniel Santos</strong>
                 <span>Química</span>
             </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de química avançada.br <br></br>            
Apaixonado por explodir  coisas em laboratórios e por  mudar a vida das pessoas  através  de experiências.

        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button" >
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    
    );
}

export  default TeacherItem;