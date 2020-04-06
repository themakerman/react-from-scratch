import {
    DEFAULT_ACTION
} from './types';

export const defaultAction = () => {
    return {
        type: DEFAULT_ACTION,
        payload: 'hi'
    }
}