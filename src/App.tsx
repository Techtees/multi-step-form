
import {FormProvider} from "./context/formContext";
import { StepWrapper } from "./components/StepWrapper";

function App() {
   
  return ( 
           <FormProvider>
                 <StepWrapper />
           </FormProvider>
   );
}

export default App;