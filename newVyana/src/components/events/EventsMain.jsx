import React from 'react'
import './eventsMain.css'
import rule1 from '../../assets/rule1.jpg'
import rule2 from '../../assets/rule2.jpg'
import rule3 from '../../assets/rule3.jpg'
import rule4 from '../../assets/rule4.jpg'
import YouTube from 'react-youtube';
function EventsMain() {
    var rules = [rule1, rule2]
    var schedule = [rule3, rule4]
    const opts = {
        height: '230',
        width: '400',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      var videoId = ['F8dDnOkvM6o','5O997NIJxZU','5SVahvJ0lPU','QsEyF6QzqWs','AzVLMfgBqgc','A9H762cp_lY']

      const handleOnReady = (event)=>{
        event.target.pauseVideo();
      }
    return (
        <>
            <div className='px-6 md:px-0 main-area-events min-h-screen bg-cover bg-no-repeat bg-center pt-1'>



                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Results </div>

                </div>

                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Photos </div>

                </div>

                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Videos </div>
                    <div className='flex flex-wrap gap-16 items-center justify-center'>
                        {
                            videoId.map((videos,id)=>{
                                return <YouTube videoId={videos} opts={opts} onReady={handleOnReady}/>
                            })
                        }
                    </div>
                </div>


                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Teams and Schedule </div>
                    {
                        schedule.map((rule, id) => {
                            return <img src={rule} key={id} alt="rules" />
                        })
                    }
                </div>



                <div className='rules-section md:w-5/6 mx-auto my-16'>
                    <div className='font-bold md:text-6xl text-2xl mx-auto md:w-5/6 my-10 drop-shadow-lg text-white'>Rules And Regulations </div>
                    {
                        rules.map((rule, id) => {
                            return <img src={rule} key={id} alt="rules" />
                        })
                    }
                </div>


            </div>
        </>
    )
}

export default EventsMain