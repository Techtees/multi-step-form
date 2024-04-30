import SideBar from "./components/Aside/SideBar";
import StepLogic from "./components/StepLogic";
function App() {
  return ( 
    <div className="overflow-hidden lg:h-screen flex items-center justify-center">
       <div className="lg:bg-white w-full lg:w-[940px] lg:p-5 lg:shadow-md lg:rounded-lg lg:flex lg:justify-between">
           <SideBar />
           <StepLogic />
       </div>
    </div>
   );
}

export default App;