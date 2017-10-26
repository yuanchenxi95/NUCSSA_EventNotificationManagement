import React from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export function generatePublicRouteList(list, authenticated) {
    return list.map(obj => <PublicRoute key={`public-route-${obj.name}`} authenticated={ authenticated } {...obj}/>);
}

export function generatePrivateRouteList(list, authenticated) {
    return list.map(obj => <PrivateRoute key={`private-route-${obj.name}`} authenticated={ authenticated} {...obj}/>);
}
