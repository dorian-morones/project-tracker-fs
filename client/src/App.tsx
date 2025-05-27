import { useState } from 'react'
import './App.css'

// UI
import "@radix-ui/themes/styles.css";
import { Box, Flex, Theme, Text, Link } from "@radix-ui/themes";

// components
import { ProjectForm } from './components/form'
import { Rewards } from './components/rewards';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const App = () => {

  const [projectCreated, setProjectCreated] = useState<string | null>(null);

  return (
    <Theme accentColor="lime" grayColor="sand" radius="large" scaling="95%">
      <Header />

      <Box as="div" width={'auto'} height={'auto'}>
        <Box py="4"><h1>Super Secret Projects</h1></Box>
        {!projectCreated ? <ProjectForm onSuccess={setProjectCreated} /> : <Rewards projectCode={projectCreated} reset={setProjectCreated} />}
      </Box>

      <Footer />

    </Theme>
  )
}

export default App
