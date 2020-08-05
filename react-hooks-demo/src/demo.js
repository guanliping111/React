import React, { useState, memo } from 'react';

export const MyComponent = props => {
    const [ userInfo, setuserInfo ] = useState({
        name: 'John',
        lastname: 'Doe'
    });
    setTimeout(() => {
        setuserInfo({
            ...userInfo,
            name: ' John '
        })
    },2000)
    return (
        <>
            <DispalyUsername name={userInfo.name} />
            <input 
                type="text" 
                value={userInfo.name}
                onChange={(e) => {
                    setuserInfo({...userInfo, name: e.target.value})
                }}
            /> 
            <input 
                type="text" 
                value={userInfo.lastname}
                onChange={(e) => {
                    setuserInfo({...userInfo, lastname: e.target.value})
                }}
            /> 
        </>
    )
}
export const DispalyUsername = memo(props => {
    console.log('只在name发生改变时才更新');
    return <h3>{props.name}</h3>
})


//useState + useEffect
// export const MyComponent = () => {
//     const [ filter, setFilter ] = React.useState("");
//     const [ userCollection, setUserCollection ] = React.useState([]);
//     React.useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//         .then(response => response.json())
//         .then(json => setUserCollection(json))
//     },[filter])
//     return(
//         <div>
//             <input vlaue={filter} onChange={e => setFilter(e.target.value)}/>
//             <ul>
//                 {
//                     userCollection.map((user, index) => (
//                         <li key={index}>{user.name}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

//memo
// const setSatisfactionClass = level => {
//     if (level < 100) {
//         return "very-dissatisfied"
//     }
//     if (level < 200) {
//         return "somewhat-dissatisfied"
//     }
//     if (level < 300) {
//         return "neither"
//     }
//     if (level < 400) {
//         return "somewhat-satisfied"
//     }
//     return "very-satisfied"
// }

// const isSameRange = (prevValue, nextValue) => {
//     const prevValueClass = setSatisfactionClass(prevValue.level);
//     const nextValueClass = setSatisfactionClass(nextValue.level);
//     return prevValueClass === nextValueClass;
// }

// export const FaceComponent = memo(props => {
//     const { level } = props;
//     return (
//         <div className={setSatisfactionClass(level)}></div>
//     )
// }, isSameRange)