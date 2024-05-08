import React, { useEffect, useState } from 'react'

const App = () => {

    const [isRunning , setIsRunning] = useState(false)
    const [elapsedTime , setElapsedTime] = useState(0)

    useEffect(() => {

      let intervalId ;

      if(isRunning){
        intervalId = setInterval(() => {
          setElapsedTime(prev => prev + 1)
        } , 100)
      }else{
        clearInterval(intervalId)
      }

      return () => clearInterval(intervalId)

    } , [isRunning])

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (
      <section className=' h-[70vh] flex items-center justify-center'>
        <div className=' w-[40%] m-auto text-center'>
          <h1 className=' text-[2rem] mb-5'>Stop Watch</h1>
          <p>Time : {formatTime(elapsedTime)}</p>
          <div className=' flex items-start justify-center gap-3 mt-[1rem]'>
          {!isRunning ? (

            <button 
              className='py-1 px-5 bg-green-800 rounded-md'
              onClick={() => setIsRunning(true)}
            >
              Start
            </button>
          ) : (
            <button 
              className='py-1 px-5 bg-red-800 rounded-md'
              onClick={() => setIsRunning(false)}
            >
              Stop
            </button>
          )}

          <button 
              className='py-1 px-5 bg-orange-800 rounded-md'
              onClick={() => {
                setElapsedTime(0);
                setIsRunning(false)
              }}
            >
              reset
            </button>
          </div>
        </div>
      </section>
    )
}

export default App