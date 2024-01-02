import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

function TeamTable() {
    const topContainer = useRef()
    const [data, setData] = useState({
        'teams': [],
    })
    const [loading, setLoading] = useState(false)
    const name = window.location.href.substring(window.location.href.lastIndexOf("/") + 1).replace("%20", " ")
    useEffect(() => {
        topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
        const url = window.location.href
        var e_id = url.substring(url.indexOf("/") + 1, url.lastIndexOf("/"))
        const id = e_id.substring(e_id.lastIndexOf('/') + 1)


        console.log(name)
        console.log(id)
        try {
            fetch(`https://vyana-sports-back-end.vercel.app/events/${id}`).then(res => res.json()).then(result => {
                setData(result)
                console.log(('mastHead' in result))
                setLoading(true)
            })

        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div>
            <div ref={topContainer} ></div>
            
            <div className="overflow-x-auto min-h-screen md:w-4/6 mx-auto">
                {loading ?<>
                 {('mastHead' in data)?<img src={data.mastHead} className="h-64 w-full" alt="" />:<></>}
                 <h1 className='text-white text-4xl text-center m-2'>{data.teams[name].name}</h1>
                 <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Membership ID</th>
                            <th>CAB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.teams[name].players.map((teams,id) => {

                                return <tr>
                                    <th>{id+1}</th>
                                    <td>{teams.name}</td>
                                    <td>{teams.member}</td>
                                    <td>{teams.cabMember==0?'NO':'YES'}</td>
                                </tr>

                            })
                        }


                    </tbody>
                </table></> : <></>}
            </div>

        </div>
    )
}

export default TeamTable