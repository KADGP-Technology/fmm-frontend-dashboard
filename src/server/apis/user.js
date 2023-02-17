import Axios from 'axios';

export async function userCheck(data) {
    return Axios.post('http://localhost:8080/user/artistProfile',data);
}

