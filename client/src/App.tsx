import { useState } from 'react'
import './App.css'

// UI
import "@radix-ui/themes/styles.css";
import { Box, Theme } from "@radix-ui/themes";

// components
import { ProjectForm } from './components/form'
import { Rewards } from './components/rewards';

export const App = () => {

  const [projectCreated, setProjectCreated] = useState<string | null>(null);

  return (
    <Theme accentColor="lime" grayColor="sand" radius="large" scaling="95%">
      <Box as="div" width={'100vw'} height={'100vw'}>
        <Box py="4"><h1>Super Secret Projects</h1></Box>
        {!projectCreated ? <ProjectForm onSuccess={setProjectCreated} /> : <Rewards projectCode={projectCreated} reset={setProjectCreated} />}
      </Box>
    </Theme>
  )
}

export default App
