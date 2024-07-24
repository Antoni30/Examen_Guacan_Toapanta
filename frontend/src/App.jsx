import { useState } from 'react'
import { Select } from './components/Select'
import { InputNumber } from './components/InputNumber'
import './App.css'

function App() {
  const [predict, setPredict] = useState('Undefined')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target))
    let isGreatherThan50k = await fetch("http://localhost:5000/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    ).then(response => response.json())

    setPredict(isGreatherThan50k.prediction[0] ? "> 50k" : "<= 50K")
  }

  const workclass = ["public", "private", "self_employed", "without_pay"];
  const education = ["Higher_Education", "College", "School"];
  const marital_status = ["Single", "Couple"];
  const occupation = [
    "Professional",
    "Service",
    "Manual",
    "Technical",
    "Sales",
    "Military",
  ];
  const relationship = [
    "Unmarried",
    "Wife",
    "Husband",
    "Not-in-family",
    "Own-child",
    "Other-relative",
  ];
  const race = [
    "White",
    "Amer-Indian-Eskimo",
    "Asian-Pac-Islander",
    "Black",
    "Other",
  ];
  const sex = ["Male", "Female"];
  const country = [
    "North-America",
    "Central-America-Caribbean",
    "Europe",
    "Asia",
    "South-America",
  ];

  return (
    <div className='predict-ui'>
      <form className='form-predict' onSubmit={handleSubmit} id='form_predict'>
        <legend className='text-center'>
          <h2>Predicción de Salario</h2>
        </legend>
        <InputNumber
          formName={"form_predict"}
          label={"Edad"}
          id={"age"}
        />
        <Select
          formName={"form_predict"}
          title={"Tipo de trabajador"}
          name={"workclass"}
          labels={workclass}
          values={workclass}
        />
        <InputNumber
          formName={"form_predict"}
          label={"Peso final"}
          id={"final_weight"}
        />
        <Select
          formName={"form_predict"}
          title={"Nivel de eduación"}
          name={"education"}
          labels={education}
          values={education}
        />
        <InputNumber
          formName={"form_predict"}
          label={"Valor de educación"}
          id={"education_num"}
        />
        <Select
          formName={"form_predict"}
          title={"Estado civil"}
          name={"marital_status"}
          labels={marital_status}
          values={marital_status}
        />
        <Select
          formName={"form_predict"}
          title={"Profesión"}
          name={"occupation"}
          labels={occupation}
          values={occupation}
        />
        <Select
          formName={"form_predict"}
          title={"Parentesco"}
          name={"relationship"}
          labels={relationship}
          values={relationship}
        />
        <Select
          formName={"form_predict"}
          title={"Parentesco"}
          name={"race"}
          labels={race}
          values={race}
        />
        <Select
          formName={"form_predict"}
          title={"Sexo"}
          name={"sex"}
          labels={sex}
          values={sex}
        />
        <Select
          formName={"form_predict"}
          title={"Ganancia de capital?"}
          name={"capital_gain"}
          labels={["yes", "no"]}
          values={[1, 0]}
        />
        <Select
          formName={"form_predict"}
          title={"Perdida de capital?"}
          name={"capital_loss"}
          labels={["yes", "no"]}
          values={[1, 0]}
        />
        <InputNumber
          formName={"form_predict"}
          label={"Horas por semana"}
          id={"hours_per_week"}
        />
        <Select
          formName={"form_predict"}
          title={"Región"}
          name={"country"}
          labels={country}
          values={country}
        />
        <button type='submit'>Enviar</button>
      </form>
      <p>
        El empleado percibe un salario de: {predict}
      </p>
    </div>
  )
}

export default App
