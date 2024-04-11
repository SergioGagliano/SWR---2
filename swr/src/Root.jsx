import {BrowserRouter, Routes, Route} from "react-router-dom"
import { GithubUser } from "./GithubUser"
import App from "./App"

export function Root(){
    return (
        <>
           <BrowserRouter>
             <Routes>
                 <Route path="/" element={<App/>}/>
                 <Route path="/user" element={<GithubUser/>}/>
             </Routes>
           </BrowserRouter>
        </>
    )
}