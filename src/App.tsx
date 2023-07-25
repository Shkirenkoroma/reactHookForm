import { FC } from 'react'
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  Controller,
} from 'react-hook-form'
import './App.css'

interface IMyForm {
  name: string
  age: number
}

const App: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    reset,
    formState: { errors },
    control,
  } = useForm<IMyForm>({
    defaultValues: {
      age: 18,
    },
  })

  const submit: SubmitHandler<IMyForm> = (data): void => {
    console.log(data)
  }

  const error: SubmitErrorHandler<IMyForm> = (data): void => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit, error)}>
        <input
          type="text"
          {...register('name', { required: true })}
          aria-invalid={errors.name ? true : false}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        <input type="number" {...register('age')} />
        <button>Отправить</button>
        <button
          type="button"
          onClick={() =>
            reset({
              age: '',
              name: '',
            })
          }
        >
          Очистить форму
        </button>
        <button type="button" onClick={() => clearErrors()}>
          Очистить ошибки
        </button>
        <button type="button" onClick={() => setValue('name', 'Вася')}>
          Установить имя
        </button>
      </form>
    </>
  )
}

export default App;
