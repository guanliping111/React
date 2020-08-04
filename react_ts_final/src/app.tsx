//根组件 
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HelloComponent } from './hello';

ReactDom.render(
    <HelloComponent userName="John"/>,
    document.getElementById('root')
)