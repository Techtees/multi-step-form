
import {FormProvider} from "./context/formContext";

import { StepWrapper } from "./components/StepWrapper";



3
function App() {
   
  return ( 
           <FormProvider>
                 <StepWrapper />
           </FormProvider>
   );
}

export default App;