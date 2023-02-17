import Axios from 'axios';

export async function getBusinessLeads(data) {
    return Axios.post('http://localhost:8080/businessLeads/getLeads',data);
}

