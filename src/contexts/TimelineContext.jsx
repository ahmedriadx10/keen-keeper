
import { useState } from 'react';
import { timelineContext } from './ContextCreator';
const TimelineContextWrapper = ({children}) => {

  const [timelineHistory,setTimelineHistory]=useState([])

  const handleTimeLine=(x)=>{

    setTimelineHistory([...timelineHistory,x])


  }


return <timelineContext.Provider value={{timelineHistory,setTimelineHistory,handleTimeLine}}>
{children}

</timelineContext.Provider>




};

export default TimelineContextWrapper;