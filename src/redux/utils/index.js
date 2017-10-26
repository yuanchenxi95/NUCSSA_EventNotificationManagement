import _ from 'lodash';

export const firebaseTransformObjectToArray = (obj) => {
    return _.values(_.mapValues(obj, (value, key) => { value.id = key; return value; }));
};

