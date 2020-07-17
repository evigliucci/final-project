import axios from 'axios';

export default {
    getAgencyInfo: function(agencyCode){
        return axios.get("https://api.usaspending.gov/api/v2/agency/" + agencyCode + "/")
    };

    getAgencyBudget: function(agencyCode) {
        return axios.get("https://api.usaspending.gov/api/v2/agency/" + agencyCode + "/budget_function/")
    }
};