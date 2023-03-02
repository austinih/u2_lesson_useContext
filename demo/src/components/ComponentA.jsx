import React, { useContext} from 'react'
import { DataContext } from '../DataContext'

import ComponentB from './ComponentB'


export default function ComponentA () {
    
    const { userInfo, setUserInfo } = useContext(DataContext)
    return (
        <div>
            <h2>I am component A</h2>

            <span>{userInfo.name}'s favorite color is </span>
            <span style={{ color: userInfo.favColor }}>
                {userInfo.favColor}
            </span>
            <h4> {userInfo.name}'s favorite food is 
                <span style={{color: userInfo.favColor }}> {userInfo.favFood}</span>
            </h4>
            <h4>
                {userInfo.name}'s favorite video game of all time is 
                <span style={{color: userInfo.favColor }}> {userInfo.favVideoGame}</span>
            </h4>
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favColor: "green"
                })}>
                Make Green
            </button>
            <button
                onClick={() =>
                setUserInfo({
                    ...userInfo,
                    favColor: "blue"
                })}>
                Make Blue
            </button>

            <ComponentB/>
        </div>
    )
}