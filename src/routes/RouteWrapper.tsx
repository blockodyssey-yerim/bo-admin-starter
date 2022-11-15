import React from 'react';

import { Route, RouteProps } from 'react-router-dom';

import { Layout } from 'layout';

export type RouteWrapperType = {
    component: React.ElementType;
} & RouteProps;

function RouteWrapper({ component: Component, ...rest }: RouteWrapperType) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

export default RouteWrapper;
