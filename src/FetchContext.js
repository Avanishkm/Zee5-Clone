import { createContext, useEffect, useState } from "react";

const FetchContext = createContext();

export default FetchContext;

 const FetchProvider = ({children}) =>{
    const[apiData, setApi] = useState([]);
    

    useEffect(()=>{
        const fetchData = async()=>{
            try{ const storedData = localStorage.getItem("videoData");
            if(storedData){
                const getData = JSON.parse(storedData);
                const parseData = getData.videoData;
                setApi(parseData);
            }else{
                const response = await fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=100", {
                    method: 'GET',
                    headers: {
                      'projectId': "f104bi07c490",
                    }
                  });
                  const data = await response.json();
                  console.log(data);
                  const result = data.data;
                  setApi(result);
            localStorage.setItem("videoData", JSON.stringify({"videoData": result}))
            }}catch(error){
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    },[]);

    return (
        <FetchContext.Provider value={{apiData}}>
          {children}
        </FetchContext.Provider>
      );
    };
     
    export {FetchProvider}
