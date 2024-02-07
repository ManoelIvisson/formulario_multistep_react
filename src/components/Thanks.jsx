import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

import { useContext } from 'react'
import { FormContext } from '../context/formContext'

import './Thanks.css'

function Thanks() {
    const {form} = useContext(FormContext)

    const emojiFace = {
        unsatisfied: <BsFillEmojiFrownFill />,
        neutral: <BsFillEmojiNeutralFill />,
        satisfied: <BsFillEmojiSmileFill />,
        very_satisfied: <BsFillEmojiHeartEyesFill />
    }

    return (
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>A sua opnião é muito importante, em breve você receberá um cupom de 80% de desconto para a sua próxima compra.</p>
            <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
            <h3>Aqui está o resumo da sua avaliação {(form.name).split(" ")[0]}:</h3>
            <p className="review-data">
                <span>Satisfação com o produto: {emojiFace[form.review]}</span>
            </p>
            <p className="review-data">
                <span>Comentário: {form.comment}</span>
            </p>
        </div>
    )
}

export default Thanks