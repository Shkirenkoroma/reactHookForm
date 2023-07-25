import { useForm, SubmitHandler } from 'react-hook-form'
import './App.css'

interface IMyForm {
  name: string
  age: number
}

function App() {
  const { register, handleSubmit } = useForm<IMyForm>({
    defaultValues: {
      age: 18,
    },
  })

  const submit: SubmitHandler<IMyForm> = (data) => {
    console.log(data)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register('name')} />
        <input type="number" {...register('age')} />
        <button>Отправить</button>
      </form>
    </>
  )
}

export default App
