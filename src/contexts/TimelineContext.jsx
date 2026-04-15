
import { useState } from 'react';
import { timelineContext } from './ContextCreator';
import { toast } from 'react-toastify';
const TimelineContextWrapper = ({children}) => {

  const [timelineHistory,setTimelineHistory]=useState([])

  const handleTimeLine=(x)=>{

    setTimelineHistory([...timelineHistory,x])
    
toast.success(`${x.status==='call'? 'Call':''} ${x.status==='text'? 'Text':''} ${x.status==='video'? 'Video':''} with ${x.name} successfull `)

  }


return <timelineContext.Provider value={{timelineHistory,setTimelineHistory,handleTimeLine}}>
{children}

</timelineContext.Provider>




};

export default TimelineContextWrapper;