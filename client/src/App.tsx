import { useState } from 'react'
import './App.css'
import { ProjectForm } from './components/form'

export const App = () => {

  return (
    <div>
      <div><h1>Super Secret Projects</h1></div>
      <ProjectForm onSuccess={{}} />
    </div>
  )
}

export default App
