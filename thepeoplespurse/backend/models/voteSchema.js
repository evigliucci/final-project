const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    //need to autoincrement each time a button is clicked to vote
    vote_count: {
        type: Int32Array,
        required: true
    },
    //need to autoincrement the respective number in the array when a tax bracket is clicked
    tax_bracket_count: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    //percentage is tallied via the corresponding tax bracket assigned
    agriculture: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],

    commerce: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    defense: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    education: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    energy: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    health_human_services: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    homeland_security: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    housing_urban_development: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    justice: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    labor: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    state: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    transportation: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    veterans_affairs: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    interior: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    treasury: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    environmental_protection: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    equal_employment: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    communication: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    election: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ],
    trade: [
        bracket_1, {
            type: Int32Array,
            required: true,
        },
        bracket_2, {
            type: Int32Array,
            required: true,
        },
        bracket_3, {
            type: Int32Array,
            required: true,
        },
        bracket_4, {
            type: Int32Array,
            required: true,
        },
        bracket_5, {
            type: Int32Array,
            required: true,
        },
        bracket_6, {
            type: Int32Array,
            required: true,
        },
        bracket_7, {
            type: Int32Array,
            required: true,
        }
    ]
},
    {
        timestamps: true
    });

const voteSchema = mongoose.model('budgetVotes', voteSchema);

module.exports = voteSchema;