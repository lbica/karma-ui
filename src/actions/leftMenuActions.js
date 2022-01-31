import axios from 'axios';

export const getEnvironmentItems = (envGuiName) => async dispatch => {
    await axios.get("http://localhost:8181/api/karma/")
}