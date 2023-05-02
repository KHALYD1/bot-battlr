import { Heading, VStack } from "@chakra-ui/react";

import { TransactionList } from "./component/TransactionList";


function App() {
  


  return (
    <container>
      <VStack>
        <Heading>Bank Of Flatiron</Heading>
        <div>Form</div>
        <TransactionList />
        
      </VStack>
    </container>
  
  );
}


export default App;
