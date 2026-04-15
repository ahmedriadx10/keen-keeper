import callImg from '../assets/images/call.png'
import textImg from '../assets/images/text.png'
import videoImg from '../assets/images/video.png'
const TimelineCard = ({data}) => {
 
  console.log(data)
const {name,date,status}=data

const statusWithIcon=(status)=>{

  let icon;


  switch(status){

case  'call':

icon= <img src={callImg} alt="call img"  className='h-8' />

break;

case 'text':
icon= <img src={textImg} alt="call img"  className='h-8'/>

break;


case 'video':


icon= <img src={videoImg} alt="call img" className='h-8' />

break;


  }

  return icon

}

  return (
    <div className="p-4 rounded-lg shadow bg-base-100">
      
<div className="flex items-center gap-4">



<div>
  {statusWithIcon(status)}
</div>


<div>
  <p><span className='text-xl font-medium text-(--primaryColor)'>{status} </span>
  <span className='text-lg text-(--textColor)'>with {name}</span>
  </p>

  <span className='font-medium text-(--textColor)'>{date}</span>
</div>

</div>

    </div>
  );
};

export default TimelineCard;