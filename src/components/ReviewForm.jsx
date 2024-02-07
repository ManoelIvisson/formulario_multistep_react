import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

import './ReviewForm.css'
import { useContext } from 'react'
import { FormContext } from '../context/formContext'

function ReviewForm() {
    const {form, updateFieldHandler} = useContext(FormContext)

    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" name="review" value="unsatisfied" required checked={form.review == "unsatisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
                    <BsFillEmojiFrownFill />
                    <p>Insastifeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" name="review" value="neutral" required checked={form.review == "neutral"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
                    <BsFillEmojiNeutralFill />
                    <p>Neutro</p>
                </label>
                <label className="radio-container">
                    <input type="radio" name="review" value="satisfied" required checked={form.review == "satisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" name="review" value="very_satisfied" required checked={form.review == "very_satisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </div>
            <div className='form-control'>
                <label htmlFor="comment">Comentário:</label>
                <textarea name="comment" id="comment" placeholder="Conte como foi a sua exeperiência com o produto... " required value={form.comment} onChange={(e) => updateFieldHandler("comment", e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default ReviewForm