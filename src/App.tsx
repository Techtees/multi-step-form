import { StepProvider } from "./context/stepContext";
import { Info } from "./components/Steps/Info"
import {Plan} from "./components/Steps/Plan"

import { Addons } from "./components/Steps/Addons"
import { Summary } from "./components/Steps/Summary"

import SideBar from "./components/Aside/SideBar";
import { StepWrapper } from "./components/StepWrapper";


function App() {

   const steps = [<Info />, <Plan />, <Addons />, <Summary />]
   
  return ( 

    <div className="overflow-hidden lg:h-screen flex items-center justify-center">
       <div className="lg:bg-white w-full lg:w-[940px] lg:p-5 lg:shadow-md lg:rounded-lg lg:flex lg:justify-between">
           <StepProvider steps={steps}>
               <SideBar />
               <StepWrapper />
            </StepProvider>
       </div>
    </div>
   );
}

export default App;