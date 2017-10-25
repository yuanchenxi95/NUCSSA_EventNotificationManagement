import _ from 'lodash';

// import EventListPage from 'src/containers/EventListPage';
// import SignUpPage from 'src/containers/SignUpPage';
import FallBackPage from 'src/containers/public/FallBackPage';
import SignInPage from 'src/containers/public/SignInPage';
import EventListPage from 'src/containers/private/EventListPage';
import CreateEventPage from 'src/containers/private/CreateEventPage';
// import Dashboard from 'src/containers/private/Dashboard';

export const PUBLIC_STRING = '/public';
export const PRIVATE_STRING = '/private';
export const routesObject = {
    public : {
        signIn: {
            path: PUBLIC_STRING + '/signIn',
            name: 'signIn',
            component: SignInPage
        },
        home: {
            path: PUBLIC_STRING,
            name: 'home',
            exact: true,
            component: SignInPage
        }
    },
    private: {
        eventList: {
            path: PRIVATE_STRING + '/event/eventList',
            name: 'events',
            component: EventListPage
        },
        createEvent: {
            path: PRIVATE_STRING + '/event/createEvent',
            name: 'createEvent',
            component: CreateEventPage
        }
        // dashboard: {
        //     path: PRIVATE_STRING + '/dashboard',
        //     name: 'event',
        //     component: Dashboard
        // }
    },
    fallBack: {
        path: '*',
        name: 'fallBack',
        component: FallBackPage
    }
};

export const defaultPrivatePath = routesObject.private.eventList.path;

export const publicRoutesList = _.values(routesObject.public);
export const privateRoutesList = _.values(routesObject.private);