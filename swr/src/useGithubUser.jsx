import useSWR from "swr"

const fetcher = (url) => fetch(url).then(response => response.json()) 

export function useGithubUser(username){

  const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`, fetcher)

   function reloading(){
    mutate()
   }

   if(username === null){
      return {
        data: null,
        error:null,
        isLoading:false,
        reloading
    }
   }

  return {
    data,
    error,
    reloading,
    isLoading: !error && !data,
  }
}





