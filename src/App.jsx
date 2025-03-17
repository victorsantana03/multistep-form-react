//COMPONENTS
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm"
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks";

//HOOKS
import { useForm } from "./hooks/useForm";

import './App.css'
import Steps from "./components/Steps";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) =>{
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
  <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <Thanks data={data}/>
  ] //LISTA DE COMPONENTES

  const {currentStep, currentComponent, changeStep, lastStep, firtsStep} = useForm(formComponents)

  return (
    <>
      <div className='app'>
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto:</p>
        </div>
      </div>

      <div className="form-container">
        
        <Steps currentStep={currentStep}/>

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>

          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">

            {!firtsStep && 
            (<button type='button' onClick={(e) => changeStep(currentStep - 1, e)}>
              <GrFormPrevious />
              <span>Voltar</span>
              </button>) 
            }
            
            {!lastStep ? 
            (<button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>)
            : 
            (<button type='button'>
              <span>Enviar</span>
              <FiSend />
            </button>)}       
          </div>
        </form>
      </div>
    </>
  )
}

export default App
