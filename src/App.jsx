import  {useState}  from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Alert from './components/Alert'

function App() {
  const [count, setCount] = useState(1)
  const [mode, setMode] = useState('light')
  const [btnText, setBtnText] =useState('Enable light')
  const [alert, setAlert] =useState(null)

  const handleDecrement=()=>{
    setCount((count)=>count-1)
  }
  const handleIncrement=()=>{
    setCount((count)=>count+1)
  }
 const showAlert=(type, message)=>{
 setAlert({
  type: type,
  message: message
 })
 setTimeout(() => {
  setAlert(null)
 }, 2000);
 }
  const toggleMode=()=>{
    if (mode=='light') {
      setMode('dark')
      setBtnText('Enable Light')
      showAlert("success", "Dark mode has been enabled")
    } else {
      setMode('light')
      setBtnText('Enable Dark')
      showAlert("danger", "light mode has been enabled")
    }
  }

  return (
    <>
      <Navbar mode={mode} btnText={btnText} toggleMode={toggleMode}  />
      <Alert  alert={alert} showAlert={showAlert}/>
      <Banner />
     
      <div className='container'>


        <h1 className='heading'>good evening everyone</h1>
        <div className="card ">
          <h4> count is: {count}</h4>
          <button onClick={handleIncrement}>
           increment
          </button>
          <button onClick={handleDecrement}>
           Decrement
          </button>


        </div>

      </div>
    </>
  )
}

export default App
