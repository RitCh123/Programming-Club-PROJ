import React from 'react';

import { ChakraProvider, Text } from '@chakra-ui/react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'


export default function Login() {

  return (

    <ChakraProvider>
      <div style={{margin: "4%"}}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
          <FormHelperText>
           Type in your email address in the given prompt.
          </FormHelperText>
        </FormControl>
      </div>
      <div style={{margin: "4%"}}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type='text' />
          <FormHelperText>
            Provide your first name.
          </FormHelperText>
        </FormControl>
      </div>
      <div style={{margin: "4%"}}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input type='text' />
          <FormHelperText>
            Provide your last name.
          </FormHelperText>
        </FormControl>
      </div>
      <div style={{margin: "4%"}}>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type='password' />
          <FormHelperText>
            We'll never share your email
          </FormHelperText>
        </FormControl>
      </div>
      <div style={{margin: "4%"}}>
        <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
      </div>
      
    
    </ChakraProvider>
    
  )
  
}