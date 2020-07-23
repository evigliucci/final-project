export default {

    getAgencyInfo: function (agencyCode) {
        return axios.get("https://api.usaspending.gov/api/v2/agency/" + agencyCode + "/")
    },

    getAgencyBudget: function (agencyCode) {
        return axios.get("https://api.usaspending.gov/api/v2/agency/" + agencyCode + "/budget_function/")
    },

    getHomeAgencyInfo: function () {
        return axios.get("https://api.tradingeconomics.com/historical/country/united%20states/indicator/gdp?c=guest:guest&format=json")
    }
};