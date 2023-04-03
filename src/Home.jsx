import './App.css';

import { ChakraProvider, Text } from '@chakra-ui/react';

import { Link } from "react-router-dom";


import { Button, ButtonGroup } from '@chakra-ui/react';

export default function App() {
  return (
    <main>
      <ChakraProvider>
        <div style={{display: "flex", flex: 1, justifyContent: "space-between", width: "100%"}}>
          <div style={{display: "flex", justifyItems: "left", flex: 1}}>
            <Button colorScheme='blue'>Home</Button>

            <Button colorScheme='blue' style={{marginLeft: "2.5%"}}>About</Button>
          </div>
            
          <Link to="/login"><Button colorScheme='blue'>Login</Button></Link>
        </div>
      </ChakraProvider>
    </main>
  )
}


// npm i react-router-dom