import React from 'react';

const LazyLoading: React.FC<{ component: React.LazyExoticComponent<any> }> = ({ component }) => {
    const AsyncComponent = component;

    return (
        <React.Suspense fallback={() => 'loading...'}>
            <AsyncComponent />
        </React.Suspense>
    );
};

LazyLoading.displayName = 'LazyLoading';

export default LazyLoading;
