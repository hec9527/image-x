import React from 'react';
import { render } from 'react-dom';
import Button from '@src/components/button';

render(<App />, document.getElementById('app'));

function App() {
    return (
        <div>
            <h1>hello world</h1>
            <Button type='text'>test</Button>
        </div>
    );
}
