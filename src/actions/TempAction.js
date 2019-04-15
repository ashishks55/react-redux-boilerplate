import _axios from '../helper/Axios';
import { TEMP_TYPE } from './Types';
import { NotificationManager } from 'react-notifications';

export const getUsers = () => async dispatch => {
    try {
        const response = await _axios.get('/users');
        dispatch({ type: TEMP_TYPE, payload: response.data});
    } catch (error) {
        NotificationManager.error('Failed to get Wild Domains')
    }
};
