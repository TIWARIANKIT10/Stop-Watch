import React,{useState, useRef,useEffect} from 'react';
import './App.css'

function App() {
  const [isrunning, setisrunning]= useState(false);
  const  [timelap, settimelap] = useState(0);
  const time = useRef(0);
  const intervalref = useRef(null);

  useEffect(()=>{
    if(isrunning){
       intervalref.current =  setInterval(()=>{
            settimelap(Date.now() - time.current);
        }, 90)

        return()=>{
            clearInterval(intervalref.current)
        }
    }

  },[isrunning]);

  function start(){
    setisrunning(true);
    time.current = Date.now()- timelap;
  }
  function stop(){
setisrunning(false);
  }

  function restart(){
    setisrunning(false)
    settimelap(0);

  }

  function minformat(number){
    
      return (number<10?"0":"")+number;
    
  }
  function timeformat(){

    let hours=  Math.floor(timelap/(1000*60*60));
    let min=  Math.floor(timelap/(1000*60)%60);
    let sec=  Math.floor(timelap/(1000)%60);
  let mili=  Math.floor(timelap%(1000)%100);


    return minformat(min)+":"+minformat(sec)+":"+minformat(mili);
  }
  
    return(<div className="stopwatch">
       
       <h4>{timeformat()}</h4>

       <div className="stopmaintain">
        <button onClick={start} className='stopbutton'>start</button>
        <button onClick={stop} className='stopbutton'>stop</button>
        <button type="reset" onClick={restart} className='stopbutton'>reset</button>
       </div>

    </div>
  )
}

export default App
