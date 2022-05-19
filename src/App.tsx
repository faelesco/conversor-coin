import './App.css'
import Header from './components/Header'
import SelectMenu from './components/SelectMenu'
import SecondSelectMenu from './components/SecondSelectMenu'
import Result from './components/Result'

function App() {
  return (
    <div className="App-header">
		<div className="container">
			<Header/>
			<SelectMenu/>
			<br/>
			<SecondSelectMenu/>
			<br/>
			<Result/>
		</div>
    </div>
  )
}

export default App
