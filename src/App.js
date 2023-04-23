import { useForm } from "react-hook-form";
import './style.css';

const App = () => {
  const { register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <div className='App'>
      <div className="container">
        <h1>React hook form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            FirstName
            <input {...register('firstName', {
              required: "Поле обязательное для заполнения",
              minLength: {
                value: 6,
                meesage:
                  "Минимум 6 символов"
              }
            })} />
          </label>
          <div style={{ height: "40px" }}>
            {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
          </div>

          <label>
            LastName
            <input {...register('lastName', {
              required: "Поле обязательное для заполнения",
              minLength: {
                value: 6,
                meesage:
                  "Минимум 6 символов"
              }
            })} />
          </label>
          <div style={{ height: "40px" }}>
            {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
          </div>
          <input type='submit' disabled={!isValid} />
        </form>
      </div>
    </div>
  )
}
export default App


