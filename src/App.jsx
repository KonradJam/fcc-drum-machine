import { useState } from 'react'
import './App.css'
import DrumButton from './components/DrumButton'
import PowerButton from './components/PowerButton'
import Screen from './components/Screen'
import VolumeControl from './components/VolumeControl'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div className="drum-machine">
          <div className="main-body">
            <div className="inner-dark">
              <div className="orange-container">
                <table className="table-orange">
                  <tbody>
                    <tr>
                      <DrumButton letter="Q" sound="Heater 1"/>
                      <DrumButton letter="W" sound="Heater 2"/>
                      <DrumButton letter="E" sound="Heater 3"/>
                    </tr>
                    <tr>
                      <DrumButton letter="A" sound="Heater 4"/>
                      <DrumButton letter="S" sound="Clap"/>
                      <DrumButton letter="D" sound="Open-HH"/>
                    </tr>
                    <tr>
                      <DrumButton letter="Z" sound="Kick-n-Hat"/>
                      <DrumButton letter="X" sound="Kick"/>
                      <DrumButton letter="C" sound="Closed-HH"/>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="console">
                <div className="left">
                  <PowerButton />
                </div>
                <div className="middle">
                  <Screen />
                </div>
                <div className="right">
                  <VolumeControl />
                </div>
              </div>
            </div>
          </div>
    </div>

  )
}

export default App
