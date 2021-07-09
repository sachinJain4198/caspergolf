import { BASIC } from '../constants/index';
export function changeEmail(email) {
    return {
        type: BASIC,
        payload: email
    }
}