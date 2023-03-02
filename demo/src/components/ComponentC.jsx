import ComponentD from "./ComponentD"
import React, {useContext} from "react"
import { DataContext } from "../DataContext"

export default function ComponentC () {
    
    const {userInfo, setUserInfo} = useContext(DataContext);
    
    return (
        <div>
            <h2>I am component C</h2>
            <p>{userInfo.name}'s favorite movie is {userInfo.favMovie}</p>

      
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favColor: "aqua",
                    favFood: "Ribs"
                })
                }
            >
                Change to Aqua and Ribs
            </button>
            
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favColor: "pink",
                    favMovie: "LOTR"
                })
                }
            >
                Change Movie LOTR
            </button>

            <ComponentD/>
        </div>
    )
}