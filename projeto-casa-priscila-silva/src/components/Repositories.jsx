import { useState, useEffect } from 'react'
import Axios from 'axios'

export function Repositories() {
    const [reposFromApi, setReposFromApi] = useState([])
    const [reposFromApiCopy, setReposFromApiCopy] = useState([])
    const baseURL = 'https://api.github.com/users/priscilaregsilva/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setReposFromApiCopy(response.data)
            setReposFromApi(response.data)
        }
        getData()
    }, [])

    function pegaRepositoriesName(event) {
        let respositoriesName = event.target.value
        let reposFromApiFilter = reposFromApiCopy
        if(respositoriesName != "") {
            reposFromApiFilter = reposFromApiCopy.filter(v => v.name.includes(respositoriesName))
        }
        setReposFromApi(reposFromApiFilter)
    }

    console.log(reposFromApi)
    return (
        <div>
            <div>
                <strong>Digite sua Busca:</strong> <input onChange={pegaRepositoriesName} />
            </div>
            <div className="github">
            {
                reposFromApi.map(item => {
                    return (
                        <a key={item.id} href={`https://github.com/priscilaregsilva/${item.name}`} target="_blank"> 
                            {item.name}
                        </a>
                    )

                })
            }
            </div>
        </div>
    )
}