import React, {useContext} from "react"
import { DataContext } from "../DataContext"

export default function ComponentB () {
    
    const { userInfo, setUserInfo} = useContext(DataContext)
    
    return (
        <div>
            <h2>This is Component B</h2>
            <p>
                <p>{userInfo.name}'s favorite movie is </p>
                <p style={{ color: userInfo.favColor }}>{userInfo.favMovie}</p>
            </p>
            
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favColor: "orange"
                })
                }
            >
                Change to Orange
            </button>
            
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favColor: "pink"
                })
                }
            >
                Change to Pink
            </button>
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favFood: "Arancini"
                })
                }
            >
                Change food 'Arancini'
            </button>
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favFood: "Kimchi Chigae"
                })
                }>
                Change food 'Kimchi Chigae'
            </button>
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favMovie: "Castle in the Sky"
                })
                }>
                Change movie 'Castle in the Sky'
            </button>
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favMovie: "The Boy and the Beast"
                })
                }>
                Change movie 'The Boy and the Beast'
            </button>
            
                    
                </div>
            )
}