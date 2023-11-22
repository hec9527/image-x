import React from 'react';
import Data from './data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LazyLoading from '@src/components/lazyLoad';

const MyRouter: React.FC = () => (
    <BrowserRouter>
        <Routes>
            {Data.map(d => (
                <Route
                    path={d.path}
                    key={d.path}
                    element={<LazyLoading component={d.component} />}
                />
            ))}
        </Routes>
    </BrowserRouter>
);

MyRouter.displayName = 'MyRouter';

export default MyRouter;
