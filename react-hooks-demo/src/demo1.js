import React, { memo } from 'react';

// export const MyComponent = props => {
//     const [ userInfo, setuserInfo ] = useState({
//         name: 'John',
//         lastname: 'Doe'
//     });
//     return (
//         <>
//             <h4>{userInfo.name}{userInfo.lastname}</h4>
//             <input type="text" value={userInfo.name}
//                  onChange={(e) => {
//                     setuserInfo({...userInfo, name: e.target.value})
//                  }}
//             /> 
//             <input type="text" value={userInfo.lastname}
//                  onChange={(e) => {
//                     setuserInfo({...userInfo, lastname: e.target.value})
//                  }}
//             /> 
//         </>
//     )
// }

// export const MyComponent = props => {
//     //JSX -> dom node
//     const [myName,setmyName] = React.useState('John Doe')
//     return(
//         <>
//             <h4>{myName}</h4>
//             <input type="text" value={myName}
//                 onChange={(e) => setmyName(e.target.value)}
//             />
//         </>
//     )
// }

// export const MyComponent = props => {
//     const [ username, setusername ] = React.useState("");
//     useEffect(() => {
//         setTimeout(() => {
//             setusername("guan")
//         },1500)
//     },[])
//     return(
//         <>
//             <h4>{username}</h4>
//             <input type="text" value={username}
//                  onChange={(e) => setusername(e.target.value)}
//             />
//         </>
//     )
// }

export const MyComponent = props => {
    const [visible, setvisible] = useState(false);
    return (
        <>
            {visible && <MyComponent />}
            <button onClick={() => setvisible(!visible)}>
                Toggle Child component visibility
            </button>

        </>
    )
}

const MyChildCompoent = () => {
    const [ userInfo, setuserInfo ] = useState({
        name: 'John',
        lastname: 'Doe'
    });
    useEffect(() => {
        console.log('called')
        return 
    })
    return (
        <>
            <h3>{userInfo.name}{userInfo.lastName}</h3>
            <input 
                type="text"
                value={userInfo.name}
                onChange={(e) => {setUserInfo({...userInfo,name:e.target.value})}}/>
            <input 
                type="text"
                value={userInfo.lastName}
                onChange={(e) => {setUserInfo({...userInfo,lastName:e.target.value})}}/>
        </>
    )
}

