import React, {useContext} from "react"
import { DataContext } from "../DataContext"

export default function ComponentD () {
    
    const {userInfo, setUserInfo} = useContext(DataContext);
    
    return (
        <div>
            <h2>I am component D</h2>
            <p>{userInfo.name}'s favorite movie is {userInfo.favMovie}</p>


            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    
                    favVideoGame: "Chrono Trigger"
                })
                }
            >
                Change back to Chrono Trigger
            </button>
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favColor: "gold",
                    favVideoGame: "Grandia"
                })
                }
            >
                Change color and Game
            </button>
            
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favColor: "purple",
                    favVideoGame: "Final Fantasy 9"
                })
                }
            >
                Change color and Game
            </button>

           
        </div>
    )
}