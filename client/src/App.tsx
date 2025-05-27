import { useState } from 'react'
import './App.css'
import { ProjectForm } from './components/form'
import { Rewards } from './components/rewards';

export const App = () => {

  const [projectCreated, setProjectCreated] = useState<string | null>(null);

  return (
    <div>
      <div><h1>Super Secret Projects</h1></div>
      {!projectCreated ? <ProjectForm onSuccess={setProjectCreated} /> : <Rewards projectCode={projectCreated} reset={setProjectCreated} />}
    </div>
  )
}

export default App
