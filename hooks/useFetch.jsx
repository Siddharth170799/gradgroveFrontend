import React from 'react'
import axios from 'axios';



const useFetch = (api) => {

    const [data,setData] = React.useState([]);

    const apiData=async()=>{
        const apiDetails = await axios.get(api)
        setData(apiDetails.data.data)
    }

    React.useEffect(()=>{
apiData()
    },[])
  return data
}

export default useFetch

