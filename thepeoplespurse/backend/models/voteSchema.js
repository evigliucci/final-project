const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    //need to autoincrement each time a button is clicked to vote
    vote_count: {
        type: Number,
        required: true
    },
    //need to autoincrement the respective number in the array when a tax bracket is clicked
    tax_bracket_count: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    //percentage is tallied via the corresponding tax bracket assigned
    agriculture: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],

    commerce: [
       // bracket_1, 
       {
        type: Number,
        required: true,
    },
    // bracket_2, 
    {
        type: Number,
        required: true,
    },
    // bracket_3, 
    {
        type: Number,
        required: true,
    },
    // bracket_4, 
    {
        type: Number,
        required: true,
    },
    // bracket_5, 
    {
        type: Number,
        required: true,
    },
    // bracket_6
    {
        type: Number,
        required: true,
    },
    // bracket_7 
    {
        type: Number,
        required: true,
    }
    ],
    defense: [
       // bracket_1, 
       {
        type: Number,
        required: true,
    },
    // bracket_2, 
    {
        type: Number,
        required: true,
    },
    // bracket_3, 
    {
        type: Number,
        required: true,
    },
    // bracket_4, 
    {
        type: Number,
        required: true,
    },
    // bracket_5, 
    {
        type: Number,
        required: true,
    },
    // bracket_6
    {
        type: Number,
        required: true,
    },
    // bracket_7 
    {
        type: Number,
        required: true,
    }
    ],
    education: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    energy: [
       // bracket_1, 
       {
        type: Number,
        required: true,
    },
    // bracket_2, 
    {
        type: Number,
        required: true,
    },
    // bracket_3, 
    {
        type: Number,
        required: true,
    },
    // bracket_4, 
    {
        type: Number,
        required: true,
    },
    // bracket_5, 
    {
        type: Number,
        required: true,
    },
    // bracket_6
    {
        type: Number,
        required: true,
    },
    // bracket_7 
    {
        type: Number,
        required: true,
    }
    ],
    health_human_services: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    homeland_security: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    housing_urban_development: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    justice: [
       // bracket_1, 
       {
        type: Number,
        required: true,
    },
    // bracket_2, 
    {
        type: Number,
        required: true,
    },
    // bracket_3, 
    {
        type: Number,
        required: true,
    },
    // bracket_4, 
    {
        type: Number,
        required: true,
    },
    // bracket_5, 
    {
        type: Number,
        required: true,
    },
    // bracket_6
    {
        type: Number,
        required: true,
    },
    // bracket_7 
    {
        type: Number,
        required: true,
    }
    ],
    labor: [
       // bracket_1, 
       {
        type: Number,
        required: true,
    },
    // bracket_2, 
    {
        type: Number,
        required: true,
    },
    // bracket_3, 
    {
        type: Number,
        required: true,
    },
    // bracket_4, 
    {
        type: Number,
        required: true,
    },
    // bracket_5, 
    {
        type: Number,
        required: true,
    },
    // bracket_6
    {
        type: Number,
        required: true,
    },
    // bracket_7 
    {
        type: Number,
        required: true,
    }
    ],
    state: [
       // bracket_1, 
       {
        type: Number,
        required: true,
    },
    // bracket_2, 
    {
        type: Number,
        required: true,
    },
    // bracket_3, 
    {
        type: Number,
        required: true,
    },
    // bracket_4, 
    {
        type: Number,
        required: true,
    },
    // bracket_5, 
    {
        type: Number,
        required: true,
    },
    // bracket_6
    {
        type: Number,
        required: true,
    },
    // bracket_7 
    {
        type: Number,
        required: true,
    }
    ],
    transportation: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    veterans_affairs: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    interior: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    treasury: [
       // bracket_1, 
       {
        type: Number,
        required: true,
    },
    // bracket_2, 
    {
        type: Number,
        required: true,
    },
    // bracket_3, 
    {
        type: Number,
        required: true,
    },
    // bracket_4, 
    {
        type: Number,
        required: true,
    },
    // bracket_5, 
    {
        type: Number,
        required: true,
    },
    // bracket_6
    {
        type: Number,
        required: true,
    },
    // bracket_7 
    {
        type: Number,
        required: true,
    }
    ],
    environmental_protection: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    equal_employment: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    communication: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    election: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    trade: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ],
    social: [
        // bracket_1, 
        {
            type: Number,
            required: true,
        },
        // bracket_2, 
        {
            type: Number,
            required: true,
        },
        // bracket_3, 
        {
            type: Number,
            required: true,
        },
        // bracket_4, 
        {
            type: Number,
            required: true,
        },
        // bracket_5, 
        {
            type: Number,
            required: true,
        },
        // bracket_6
        {
            type: Number,
            required: true,
        },
        // bracket_7 
        {
            type: Number,
            required: true,
        }
    ]
},
    {
        timestamps: true
    });

    module.exports = mongoose.model('voteSchema', voteSchema);

