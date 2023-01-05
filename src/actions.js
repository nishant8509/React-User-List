import axios from 'axios';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    setTimeout(() => {
      axios.get('https://reqres.in/api/users?page=2')
        .then(response => {
          dispatch({ type: 'FETCH_USERS', payload: {
            users: response.data.data,
            total: response.data.total,
          }});
        });
    }, 2000);  // delay API response by 2 seconds
  }
}

export const fetchUser = (id) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER' });
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(response => {
        dispatch({ type: 'FETCH_USER', payload: {
          user: response.data.data,
        }});
      });
  }
}
