import sideShape from '../../assets/sideShape.svg';
import { Steps } from './Steps';
import { StepDataType } from '../../types/global';


const stepData : StepDataType[] = [
    {
        stepNo: 1,
        stepTitle: 'YOUR INFO'
    },
    {
        stepNo: 2,
        stepTitle: 'SELECT PLAN'
    },
    {
        stepNo: 3,
        stepTitle: 'ADD-ONS'
    },
    {
        stepNo: 4,
        stepTitle: 'SUMMARY'
    },
]

type SideBarProp = {
    currStep: number
}


const  SideBar: React.FC<SideBarProp> = ({currStep}) => {

    return ( 

        
        <div className='overflow-hidden relative bg-purple w-full h-[172px] lg:h-[528px] lg:w-[30%]  lg:rounded-lg'>
            <div className='flex justify-center mt-[28px] lg:mt-0 lg:justify-between lg:w-[153px] h-[228px] lg:absolute left-[25px] top-[30px] lg:flex-col '>
              {
                stepData.map((data,index,) => {
                    const {stepNo, stepTitle} = data
                    return(
                        <Steps key={index} stepNo={stepNo} stepTitle={stepTitle} currStep={currStep}   />
                    )
                })
              }
            </div>

            <img src={sideShape} alt='sideImge'className='lg absolute -bottom-[4px]  md:-bottom-[150px] lg:bottom-0  object-contain w-full ' />
        </div>
     );
} 

export default SideBar;
