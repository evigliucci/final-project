const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    //need to autoincrement each time a button is clicked to vote
    vote_count: {
        type: Number,
        required: false    },
    //need to autoincrement the respective number in the array when a tax bracket is clicked
    tax_bracket_count: [
        // bracket_1, 
        {
            type: Number,
            required: false        
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    //percentage is tallied via the corresponding tax bracket assigned
    agriculture: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],

    commerce: [
       // bracket_1, 
       {
        type: Number,
        required: false
    },
    // bracket_2, 
    {
        type: Number,
        required: false
    },
    // bracket_3, 
    {
        type: Number,
        required: false
    },
    // bracket_4, 
    {
        type: Number,
        required: false
    },
    // bracket_5, 
    {
        type: Number,
        required: false
    },
    // bracket_6
    {
        type: Number,
        required: false
    },
    // bracket_7 
    {
        type: Number,
        required: false
    }
    ],
    defense: [
       // bracket_1, 
       {
        type: Number,
        required: false
    },
    // bracket_2, 
    {
        type: Number,
        required: false
    },
    // bracket_3, 
    {
        type: Number,
        required: false
    },
    // bracket_4, 
    {
        type: Number,
        required: false
    },
    // bracket_5, 
    {
        type: Number,
        required: false
    },
    // bracket_6
    {
        type: Number,
        required: false
    },
    // bracket_7 
    {
        type: Number,
        required: false
    }
    ],
    energy: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    education: [
       // bracket_1, 
       {
        type: Number,
        required: false
    },
    // bracket_2, 
    {
        type: Number,
        required: false
    },
    // bracket_3, 
    {
        type: Number,
        required: false
    },
    // bracket_4, 
    {
        type: Number,
        required: false
    },
    // bracket_5, 
    {
        type: Number,
        required: false
    },
    // bracket_6
    {
        type: Number,
        required: false
    },
    // bracket_7 
    {
        type: Number,
        required: false
    }
    ],
    health_human_services: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    homeland_security: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    interior: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    labor: [
       // bracket_1, 
       {
        type: Number,
        required: false
    },
    // bracket_2, 
    {
        type: Number,
        required: false
    },
    // bracket_3, 
    {
        type: Number,
        required: false
    },
    // bracket_4, 
    {
        type: Number,
        required: false
    },
    // bracket_5, 
    {
        type: Number,
        required: false
    },
    // bracket_6
    {
        type: Number,
        required: false
    },
    // bracket_7 
    {
        type: Number,
        required: false
    }
    ],
    state: [
       // bracket_1, 
       {
        type: Number,
        required: false
    },
    // bracket_2, 
    {
        type: Number,
        required: false
    },
    // bracket_3, 
    {
        type: Number,
        required: false
    },
    // bracket_4, 
    {
        type: Number,
        required: false
    },
    // bracket_5, 
    {
        type: Number,
        required: false
    },
    // bracket_6
    {
        type: Number,
        required: false
    },
    // bracket_7 
    {
        type: Number,
        required: false
    }
    ],
    transportation: [
       // bracket_1, 
       {
        type: Number,
        required: false
    },
    // bracket_2, 
    {
        type: Number,
        required: false
    },
    // bracket_3, 
    {
        type: Number,
        required: false
    },
    // bracket_4, 
    {
        type: Number,
        required: false
    },
    // bracket_5, 
    {
        type: Number,
        required: false
    },
    // bracket_6
    {
        type: Number,
        required: false
    },
    // bracket_7 
    {
        type: Number,
        required: false
    }
    ],
    treasury: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    environmental_protection: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    communication: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    election: [
       // bracket_1, 
       {
        type: Number,
        required: false
    },
    // bracket_2, 
    {
        type: Number,
        required: false
    },
    // bracket_3, 
    {
        type: Number,
        required: false
    },
    // bracket_4, 
    {
        type: Number,
        required: false
    },
    // bracket_5, 
    {
        type: Number,
        required: false
    },
    // bracket_6
    {
        type: Number,
        required: false
    },
    // bracket_7 
    {
        type: Number,
        required: false
    }
    ],
    trade: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    housing_urban_development: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    social: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    justice: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    NASA: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    veterans_affairs: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ],
    equal_employment: [
        // bracket_1, 
        {
            type: Number,
            required: false
        },
        // bracket_2, 
        {
            type: Number,
            required: false
        },
        // bracket_3, 
        {
            type: Number,
            required: false
        },
        // bracket_4, 
        {
            type: Number,
            required: false
        },
        // bracket_5, 
        {
            type: Number,
            required: false
        },
        // bracket_6
        {
            type: Number,
            required: false
        },
        // bracket_7 
        {
            type: Number,
            required: false
        }
    ]
},
    { timestamps: false    },
        {
        collection: 'budgetVotes'
    });

    const Vote = mongoose.model('Vote', voteSchema);
    module.exports = Vote;

