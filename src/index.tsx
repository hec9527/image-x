import '@src/assets/less/reset.less';
import React from 'react';
import { render } from 'react-dom';
import MyRouter from '@src/route';

render(<App />, document.getElementById('app'));

function App() {
    return (
        <div>
            <h1>hello world</h1>
            <MyRouter />
        </div>
    );
}
