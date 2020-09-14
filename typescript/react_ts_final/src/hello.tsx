//子组件 
import * as React from 'react';

export interface Props {
    userName:string;
}

export const HelloComponent = (props) => (
    <h2>Hello user: {props.userName}</h2>

)