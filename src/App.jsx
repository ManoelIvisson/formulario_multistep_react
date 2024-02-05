import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/UserForm copy'

import './App.css'
import { useForm } from './hooks/useForm'

function App() {

  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
      <div className='app'>
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com a sua compra, utilize o formulário abaxio para avaliar o produto</p>
          <div className='form-container'>
            <p>etapas</p>
            <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
              <div className="inputs-container">
                {currentComponent}
              </div>
              <div className="actions">
                {!isFirstStep && (
                  <button type="button" onClick={() => changeStep(currentStep - 1)}>
                    <GrFormPrevious />
                    <span>Voltar</span>
                  </button>
                )}
                {!isLastStep ? (
                  <button type="submit">
                    <span>Avançar</span>
                    <GrFormNext />
                  </button>
                ) : (
                  <button type="submit">
                    <span>Enviar</span>
                    <FiSend />
                  </button> 
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default App
