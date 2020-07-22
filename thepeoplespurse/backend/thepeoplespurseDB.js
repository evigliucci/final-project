const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const voteSchema = new Schema ({
    taxbracket: {
        type: Number
    },
    DeptofAgriculture:{
        type: String,
    },
    DeptofCommerce:{
        type: String,
    },
    DeptofDefense:{
        type: String,
    },
    DeptofEducation:{
        type: String,
    },
    DeptofEnergy:{
        type: String,
    },
    DeptofHealthandHumanServices:{
        type: String,
    },
    DeptofHousingandUrbanDevelopment:{
        type: String,
    },
    DeptofJustice:{
        type: String,
    },
    DeptofLabor:{
        type: String,
    },
    DeptofState:{
        type: String,
    },
    DeptofTransportation:{
        type: String,
    },
    DeptofVeteransAffairs:{
        type: String,
    },
    DeptoftheInterior:{
        type: String,
    },
    DeptofTreasury:{
        type: String,
    },
    EnvironmentalProtectionAgency:{
        type: String,
    },
    EqualEmploymentOpportunityComission:{
        type: String,
    },
    FederalCommunicationComission:{
        type: String,
    },
    FederalElectionComission:{
        type: String,
    },
    FederalTradeComission:{
        type: String,
    }
},
{
    timestamps: true
});

const Vote = mongoose.model("Vote", voteSchema);
module.exports = Vote;