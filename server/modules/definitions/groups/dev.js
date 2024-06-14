const { combineStats, menu, addAura, makeDeco, LayeredBoss, makeMulti } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

// Menus
Class.ytsymbol = {
    PARENT: "genericTank",
    SHAPE: 'M -1 -1 L 1 0 L -1 1 L -1 -1',
    COLOR: "#FFFFFF"
}
Class.yt = {
    PARENT: "genericTank",
    SHAPE: 'M 1.125 -0.375 Q 1.125 -0.75 0.75 -0.75 L -0.75 -0.75 Q -1.125 -0.75 -1.125 -0.375 Q -1.125 0 -1.125 0.375 Q -1.125 0.75 -0.75 0.75 L 0.75 0.75 Q 1.125 0.75 1.125 0.375 L 1.125 -0.375',
    LABEL: "YouTuber",
    COLOR: "#FF0000",
    LEVEL: 45,
    BODY: { 
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 75,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    GUNS: [
        {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op]),
            TYPE: "bullet"
            }
            
        }
    ],
    TURRETS: [
        {
            POSITION: [5, 0, 0, 0, 0, 1],
            TYPE: "ytsymbol",
        },
    ]
}
Class.developer = {
    PARENT: "genericTank",
    LABEL: "Developer",
    LEVEL: 45,
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SKILL_CAP: Array(10).fill(dfltskl),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    DRAW_HEALTH: true,
    ARENA_CLOSER: false,
    INVISIBLE: [0, 0],
    ALPHA: [0, 1],
    SYNCS_SKILLS: true,
    HITS_OWN_TYPE: "hardOnlyTanks",
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.8],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet"
            }
        }
    ]
}
Class.peaksignaler = {
    PARENT: "genericTank",
    LABEL: "Signaler but P E A K",
    GUNS: [
        {
            POSITION: [18, 17, 0.7, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, 11.25, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, -11.25, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, 22.5, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, -22.5, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, 11.25, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, -11.25, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, 22.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
        {
            POSITION: [18, 17, 0.7, 0, 0, -22.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sig, {spray: 0, shudder: 0}]),
                TYPE: "signalerBullet",
                LABEL: "Signal",
            }
        },
    ]
}
Class.developerbutpeak = {
    PARENT: "genericTank",
    LABEL: "Developer but P E A K",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SKILL_CAP: Array(10).fill(dfltskl),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    DRAW_HEALTH: true,
    ARENA_CLOSER: false,
    INVISIBLE: [0, 0],
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    SHAPE: -4,
    GUNS: [
        {
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {reload: 2}]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [18, 10, -1.4, 0, 0, 90, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {reload: 2}]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [18, 10, -1.4, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {reload: 2}]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [18, 10, -1.4, 0, 0, 270, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {reload: 2}]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [18, 10, -1.4, 0, 0, 0+45, 0+0.125],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {reload: 2}]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [18, 10, -1.4, 0, 0, 90+45, 0.25+0.125],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {reload: 2}]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [18, 10, -1.4, 0, 0, 180+45, 0.5+0.125],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {reload: 2}]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [18, 10, -1.4, 0, 0, 270+45, 0.75+0.125],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {reload: 2}]),
                TYPE: "developerBullet"
            }
        }
    ]
}
Class.doughNut = {
    PARENT: "genericTank",
    LABEL: "doughnut",
    SHAPE: "M 1 0 Q 1 -1 0 -1 Q -1 -1 -1 0 Q -1 1 0 1 Q 1 1 1 0 M 0 0.5 Q -0.5 0.5 -0.5 0 Q -0.5 -0.5 0 -0.5 Q 0.5 -0.5 0.5 0 Q 0.5 0.5 0 0.5",
    GUNS:
    [
        {
            POSITION: [13, 8, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0}]),
                TYPE: "doughNutdoughNut",
            }
        }
    ]
}
Class.doughNutdoughNut = {
    PARENT: "trap",
    LABEL: "doughnut",
    SHAPE: "M 1 0 Q 1 -1 0 -1 Q -1 -1 -1 0 Q -1 1 0 1 Q 1 1 1 0 M 0 0.5 Q -0.5 0.5 -0.5 0 Q -0.5 -0.5 0 -0.5 Q 0.5 -0.5 0.5 0 Q 0.5 0.5 0 0.5",
}
Class.pinput = {
    PARENT: "genericTank",
    LABEL: "pin putter",
    GUNS:
    [
        {
            POSITION: [13, 8, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
        {
            POSITION: [13, 8, 1, 5, 10, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
        {
            POSITION: [13, 8, 1, 5, -10, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
        {
            POSITION: [13, 8, 1, 5, -20, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
        {
            POSITION: [13, 8, 1, 5, 20, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
        {
            POSITION: [13, 8, 1, 15, -10, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
        {
            POSITION: [13, 8, 1, 15, 10, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
        {
            POSITION: [13, 8, 1, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
        {
            POSITION: [13, 8, 1, 25, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, recoil: 0}]),
                TYPE: "doughNutdoughNut",
            }
        },
    ]
}
Class.spectator = {
    PARENT: "genericTank",
    LABEL: "Spectator",
    ALPHA: 0,
    IGNORED_BY_AI: true,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        SPEED: 5,
        FOV: 5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
    ON: [{
        event: "fire",
        handler: ({ body, gun }) => {
            body.FOV += 1
        }
    }, {
        event: "altFire",
        handler: ({ body, gun }) => {
            body.FOV -= 1
        }
    }],
    GUNS: [{
        POSITION: { LENGTH: 0.01 },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {reload: 0.3}]),
            TYPE: 'bullet',
        }
    }, {
        POSITION: { ANGLE: 90 , LENGTH: 0.01 },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {reload: 0.3}]),
            TYPE: 'bullet',
            ALT_FIRE: true
        }
    }]
}

Class.bosses = menu("Bosses")

Class.sentries = menu("Sentries")
Class.sentries.COLOR = "pink"
Class.sentries.UPGRADE_COLOR = "pink"
Class.sentries.SHAPE = 3.5
Class.sentries.TURRETS = [
    {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: "genericEntity"
    }
]

Class.elites = menu("Elites")
Class.elites.COLOR = "pink"
Class.elites.UPGRADE_COLOR = "pink"
Class.elites.SHAPE = 3.5

Class.mysticals = menu("Mysticals")
Class.mysticals.COLOR = "gold"
Class.mysticals.UPGRADE_COLOR = "gold"
Class.mysticals.SHAPE = 4

Class.nesters = menu("Nesters")
Class.nesters.COLOR = "purple"
Class.nesters.UPGRADE_COLOR = "purple"
Class.nesters.SHAPE = 5.5

Class.rogues = menu("Rogues")
Class.rogues.COLOR = "darkGrey"
Class.rogues.UPGRADE_COLOR = "darkGrey"
Class.rogues.SHAPE = 6

Class.rammers = menu("Rammers")
Class.rammers.COLOR = "teal"
Class.rammers.UPGRADE_COLOR = "teal"
Class.rammers.TURRETS = [
    {
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "smasherBody",
    }
]

Class.terrestrials = menu("Terrestrials")
Class.terrestrials.COLOR = "orange"
Class.terrestrials.UPGRADE_COLOR = "orange"
Class.terrestrials.SHAPE = 7

Class.celestials = menu("Celestials")
Class.celestials.COLOR = "lightGreen"
Class.celestials.UPGRADE_COLOR = "lightGreen"
Class.celestials.SHAPE = 9

Class.eternals = menu("Eternals")
Class.eternals.COLOR = "veryLightGrey"
Class.eternals.UPGRADE_COLOR = "veryLightGrey"
Class.eternals.SHAPE = 11

Class.devBosses = menu("Developers")
Class.devBosses.COLOR = "lightGreen"
Class.devBosses.UPGRADE_COLOR = "rainbow"
Class.devBosses.SHAPE = 4

Class.tanks = menu("Tanks")
Class.unavailable = menu("Unavailable")

Class.dominators = menu("Dominators")
Class.dominators.TURRETS = [
    {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: "dominationBody",
    }
]

Class.sanctuaries = menu("Sanctuaries")
Class.sanctuaries.TURRETS = [
    {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: "dominationBody",
    },
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        }
]

Class.skills = menu("Skills")
Class.skills.UPGRADE_COLOR = "blue"

Class.max1 = menu("Max (9)")
Class.max1.SKILL = Array(10).fill(9),
Class.max1.UPGRADE_COLOR = "blue",
Class.max1.SKILL_CAP = Array(10).fill(9),
Class.max1.SYNCS_SKILLS = true

Class.max2 = menu("Max (12)")
Class.max2.SKILL = Array(10).fill(12),
Class.max2.UPGRADE_COLOR = "blue",
Class.max2.SKILL_CAP = Array(10).fill(12),
Class.max2.SYNCS_SKILLS = true

Class.max3 = menu("Max (15)")
Class.max3.SKILL = Array(10).fill(15),
Class.max3.UPGRADE_COLOR = "blue",
Class.max3.SKILL_CAP = Array(10).fill(15),
Class.max3.SYNCS_SKILLS = true

Class.max4 = menu("Max (20)")
Class.max4.SKILL = Array(10).fill(20),
Class.max4.UPGRADE_COLOR = "blue",
Class.max4.SKILL_CAP = Array(10).fill(20),
Class.max4.SYNCS_SKILLS = true

Class.max5 = menu("Max (50)")
Class.max5.SKILL = Array(10).fill(50),
Class.max5.UPGRADE_COLOR = "blue",
Class.max5.SKILL_CAP = Array(10).fill(50),
Class.max5.SYNCS_SKILLS = true

Class.max6 = menu("Max (100)")
Class.max6.SKILL = Array(10).fill(100),
Class.max6.UPGRADE_COLOR = "blue",
Class.max6.SKILL_CAP = Array(10).fill(100),
Class.max6.SYNCS_SKILLS = true

Class.max7 = menu("Max (200)")
Class.max7.SKILL = Array(10).fill(200),
Class.max7.UPGRADE_COLOR = "blue",
Class.max7.SKILL_CAP = Array(10).fill(200),
Class.max7.SYNCS_SKILLS = true

// Generators
function compileMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let str = matrix[y][x],
            LABEL = str[0].toUpperCase() + str.slice(1).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
            code = str + 'Generator';
        Class[code] = matrix[y][x] = {
            PARENT: "spectator",
            LABEL,
            SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
            TURRETS: [{
                POSITION: [5 + y * 2, 0, 0, 0, 0, 1],
                TYPE: str,
            }],
            GUNS: [{
                POSITION: [14, 12, 1, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                    TYPE: "bullet"
                }
            }, {
                POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                    INDEPENDENT_CHILDREN: true,
                    TYPE: str
                },
            },
            {
                POSITION: [0.01, 12, 1.4, 4, 0, 180, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                    ALT_FIRE: true,
                },
            }],
        };
    }
}
function connectMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let top = (y + matrixHeight - 1) % matrixHeight,
            bottom = (y + matrixHeight + 1) % matrixHeight,
            left = (x + matrixWidth - 1) % matrixWidth,
            right = (x + matrixWidth + 1) % matrixWidth,

        center = matrix[y     ][x    ];
        top    = matrix[top   ][x    ];
        bottom = matrix[bottom][x    ];
        left   = matrix[y     ][left ];
        right  = matrix[y     ][right];

        matrix[y][x].UPGRADES_TIER_0 = [
            "developer" ,  top    , "spectator",
             left       ,  center ,  right      ,
            "basic"     ,  bottom ,  matrix2Entrance
        ];
    }
}
let generatorMatrix = [
    [ "egg"           , "gem"                , "jewel"                  , "crasher"             , "sentry"               , "shinySentry"        , "EggRelic"           , "degg1"      , "dgem1"             ],
    [ "square"        , "shinySquare"        , "legendarySquare"        , "shadowSquare"        , "rainbowSquare"        , "transSquare"        , "SquareRelic"        , "dsquare1"   , "shinydsquare1"     ],
    [ "triangle"      , "shinyTriangle"      , "legendaryTriangle"      , "shadowTriangle"      , "rainbowTriangle"      , "transTriangle"      , "TriangleRelic"      , "dtriangle1" , "shinydtriangle1"   ],
    [ "pentagon"      , "shinyPentagon"      , "legendaryPentagon"      , "shadowPentagon"      , "rainbowPentagon"      , "transPentagon"      , "PentagonRelic"      , "dpentagon1" , "shinydpentagon1"   ],
    [ "betaPentagon"  , "shinyBetaPentagon"  , "legendaryBetaPentagon"  , "shadowBetaPentagon"  , "rainbowBetaPentagon"  , "transBetaPentagon"  , "BetaPentagonRelic"  , "dbpentagon1", "shinydbpentagon1"  ],
    [ "alphaPentagon" , "shinyAlphaPentagon" , "legendaryAlphaPentagon" , "shadowAlphaPentagon" , "rainbowAlphaPentagon" , "transAlphaPentagon" , "AlphaPentagonRelic" , "dapentagon1", "shinydapentagon1"  ],
    [ "sphere"        , "cube"               , "tetrahedron"            , "octahedron"          , "dodecahedron"         , "icosahedron"        , "tesseract"          , "dhexagon1"  , "shinydhexagon1"    ],
],
gemRelicMatrix = [];
for (let tier of [ "", "Egg", "Square", "Triangle", "Pentagon", "BetaPentagon", "AlphaPentagon" ]) {
    let row = [];
    for (let gem of [ "Power", "Space", "Reality", "Soul", "Time", "Mind" ]) {
        row.push(gem + (tier ? tier + 'Relic' : 'Gem'));
    }
    gemRelicMatrix.push(row);
}

compileMatrix(generatorMatrix);
compileMatrix(gemRelicMatrix);

// Tensor = N-Dimensional Array, BASICALLY
let labyTensor = [];
for (let tier = 0; tier < 6; tier++) {
    let row = [];
    for (let poly of [ "Egg", "Square", "Triangle", "Pentagon", "Hexagon" ]) {
        let column = [];
        for (let shiny of [ "", "Shiny", "Legendary", "Shadow", "Rainbow", "Trans" ]) {
            let str = `laby${tier}${shiny}${poly}`,
                LABEL = str[0].toUpperCase() + str.slice(1).replace(/\d/, d => ["", "Beta", "Alpha", "Omega", "Gamma", "Delta"][d]).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
                code = str + 'Generator';
            column.push(Class[code] = {
                PARENT: "spectator",
                LABEL,
                SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
                TURRETS: [{
                    POSITION: [5 + tier * 2, 0, 0, 0, 0, 1],
                    TYPE: str,
                }],
                GUNS: [{
                    POSITION: [14, 12, 1, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                        TYPE: "bullet"
                    }
                }, {
                    POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                        INDEPENDENT_CHILDREN: true,
                        TYPE: str
                    },
                }, {
                    POSITION: [14, 12, 1, 4, 180, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                        TYPE: "bullet",
                        ALT_FIRE: true
                    }
                }, ],
            });
        }
        row.push(column);
    }
    labyTensor.push(row);
}

connectMatrix(generatorMatrix, 'PowerGemGenerator');
connectMatrix(gemRelicMatrix, 'laby0EggGenerator');

let tensorLength = labyTensor[0][0].length,
    tensorWidth = labyTensor[0].length,
    tensorHeight = labyTensor.length;
for (let x = 0; x < tensorWidth; x++) for (let y = 0; y < tensorHeight; y++) for (let z = 0; z < tensorLength; z++) {
    let top = (y + tensorHeight - 1) % tensorHeight,
        bottom = (y + tensorHeight + 1) % tensorHeight,
        left = (x + tensorWidth - 1) % tensorWidth,
        right = (x + tensorWidth + 1) % tensorWidth,
        front = (z + tensorLength - 1) % tensorLength,
        back = (z + tensorLength + 1) % tensorLength,

    center = labyTensor[y     ][x    ][z    ];
    top    = labyTensor[top   ][x    ][z    ];
    bottom = labyTensor[bottom][x    ][z    ];
    left   = labyTensor[y     ][left ][z    ];
    right  = labyTensor[y     ][right][z    ];
    front  = labyTensor[y     ][x    ][front];
    back   = labyTensor[y     ][x    ][back ];

    labyTensor[y][x][z].UPGRADES_TIER_0 = [
        "developer" ,  top                , "spectator",
         left       ,  center             ,  right     ,
        "basic"     ,  bottom             , "eggGenerator",
         front      , "PowerGemGenerator" ,  back
    ];
}

// Testing tanks 
Class.wrongGameBudMinionFangs = {
    LABEL: "genericTank",
    COLOR: "gray",
    MIRROR_MASTER_ANGLE: true,
    SHAPE: 'M 1.7 0.4 Q 1.8 0.7 2.6 0.3 Q 1.9 0.4 1.8 0.1 M 1.8 -0.1 Q 1.9 -0.4 2.6 -0.3 Q 1.8 -0.7 1.7 -0.4'
}
Class.wrongGameBudMinion = {
    PARENT: "drone",
    LABEL: "Ant",
    SHAPE: 'M 0 0 Q 0 1 1 1 Q 2 1 2 0 Q 2 -1 1 -1 Q 0 -1 0 0 M 0.3 -0.7 C -1.3 -0.7 -1.3 0.7 0.3 0.7',
    BODY: {
        HEALTH: base.HEALTH * 3,
        DAMAGE: base.DAMAGE * 2
    },
    TURRETS: [
        {
            POSITION: [23, 0, 0, 0, 0, 0,],
            TYPE: "wrongGameBudMinionFangs"
        },
    ],
}
Class.wrongGameBud = {
    PARENT: "genericTank",
    LABEL: "Wrong Game Bud",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "wrongGameBudMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
}
Class.threeSixtyGrower = makeMulti({
    PARENT: "genericTank",
    GUNS: [ {
            POSITION: [ 22, 10, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "growBullet",
            },
        }, 
        {
            POSITION: [ 5, 12, 1, 15, 0, 0, 0, ],
        }, 
    ],
}, 360, "360 Grower")
let x = Math.floor(Math.random()*10)
if (x == 0) {
    x += 3
}
if (x == 1) {
    x += 2
}
if (x == 2) {
    x += 1
}
if (x == 4) {
    x += 1
}
Class.randomAmountCannonTest = makeMulti({
    PARENT: "genericTank",
    GUNS: [ {
            POSITION: [ 22, 10, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "growBullet",
            },
        }, 
        {
            POSITION: [ 5, 12, 1, 15, 0, 0, 0, ],
        }, 
    ],
}, x, x + " Grower")
Class.clearerClearing = {
    PARENT: "bullet",
    ARENA_CLOSER: true,
    BODY: {
        HEALTH: 2e4,
        SHIELD: 2e3,
        REGEN: 200,
        FOV: 1,
        RESIST: 10000,
    },
}
Class.clearerExclamationMark = {
    PARENT: "genericTank",
    MIRROR_MASTER_ANGLE: false,
    SHAPE: 'M -0.3 0.4 L -0.4 -1 L 0.4 -1 L 0.3 0.4 L -0.3 0.4 M -0.2 0.6 L 0.2 0.6 L 0.2 1 L -0.2 1 L -0.2 0.6',
    COLOR: "#BB1100"
}
Class.clearer = {
    PARENT: "genericTank",
    LABEL: "Clearer",
    UPGRADE_TOOLTIP: "ONLY USE THIS TANK IF YOU WANT TO RESET SERVER, DO NOT ABUSE IT. regards, anguish",
    BODY: {
        FOV: 12
    },
    GUNS: [
        {
            POSITION: [19, 13, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [18, 14, 1.5, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {damage: 1000, recoil: 0, speed: 100, size: 300}]),
                TYPE: ["clearerClearing", {ALPHA: 0.01}]
            }
        },
    ],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 0, 1],
            TYPE: "clearerExclamationMark"
        }
    ]
}
Class.rooster = {
    PARENT: "genericTank",
    LABEL: "Rooster",
    GUNS: [
        // Booster Thrusters
        {
            POSITION: [14, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster
            }
        },
        {
            POSITION: [14, 8, 1, 0, 1, -140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, -150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster
            }
        },
        // Ranger Cannon
        {
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ]
}
Class.fastmf = {
    PARENT: "genericTank",
    LABEL: "Fast Mother Fricker",
    GUNS: [ 
        {
            POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [ 23, 17, 1.5, 0, 0, -180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.01, recoil: 3}]),
                TYPE: "bullet",
            },
        }, 
    ],
}; 
Class.trueEngiSentryTurret = {
    PARENT: "genericTank"
}
Class.trueEngiSentry = {
    PARENT: "setTrap",
    LABEL: "Sentry",
    SHAPE: -5,
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
}
Class.trueEngi = {
    PARENT: "genericTank",
    LABEL: "True Engineer",
    DANGER: 13,
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
                STAT_CALCULATOR: gunCalcNames.block
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
}
Class.greentealcolortest = {
    PARENT: "genericTank",
    LABEL: "Green and Teal Color test",
    COLOR: "42"
}
Class.TKoAsymbol1 = {
    PARENT: "genericTank",
    COLOR: "#de4068",
    SHAPE: 'M -1 0 L 0 -1 L 1 0 L 0 1 L -1 0'
}
Class.TKoAsymbol2 = {
    PARENT: "genericTank",
    COLOR: "#b34074",
    SHAPE: 'M -2 0 L 0 -2 L 2 0 L 0 2 L -2 0'
}
Class.TKoAsymbol3 = {
    PARENT: "genericTank",
    COLOR: "#964480",
    SHAPE: 'M -3 0 L 0 -3 L 3 0 L 0 3 L -3 0'
}
Class.TKoA = {
    PARENT: "genericTank",
    LABEL: "The Killer of All",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.damagemuch, g.damagemuch, g.damagemuch, g.damagemuch, g.damagemuch, g.damagemuch, g.damagemuch, g.damagemuch, g.damagemuch, g.damagemuch]),
                TYPE: "bullet",
            } 
        }
    ],
    TURRETS: [
        {
            POSITION: [4, 0, 0, 0, 0, 3],
            TYPE: "TKoAsymbol1",
        },
        {
            POSITION: [5, 0, 0, 0, 0, 2],
            TYPE: "TKoAsymbol2",
        },
        {
            POSITION: [6, 0, 0, 0, 0, 1],
            TYPE: "TKoAsymbol3",
        },
    ]
}
Class.cbsymbol = {
    PARENT: "genericTank",
    FACING_TYPE: 'autospin',
    COLOR: "gray",
    SHAPE: 'M -3 -1 L -3 -3 L -1 -3 L -1 -4 L -2 -4 L 0 -6 L 2 -4 L 1 -4 L 1 -3 L 3 -3 L 3 -1 L 4 -1 L 4 -2 L 6 0 L 4 2 L 4 1 L 3 1 L 3 3 L 1 3 L 1 4 L 2 4 L 0 6 L -2 4 L -1 4 L -1 3 L -3 3 L -3 1 L -4 1 L -4 2 L -6 0 L -4 -2 L -4 -1 L -3 -1'
}
Class.cb = {
    PARENT: "genericSmasher",
    LABEL: "Chain Breaker",
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
    },
    COLOR: "#27960c",
    TURRETS: [
        {
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [3, 0, 0, 0, 0, 1],
            TYPE: "cbsymbol",
        },
    ],
}
Class.mid = {
    PARENT: 'genericTank',
    LABEL: 'Middle',
    GUNS: [ {
        POSITION: [ 15, 11, 1, 0, 0, -90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
            TYPE: "bullet"
        }
        }, {
        POSITION: [ 15, 11, 1, 0, 0, 90, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
            TYPE: "bullet"
        }
        }, 
    ],
    TURRETS: [{
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "mid2",
    }]
};
Class.mid2 = {
    PARENT: 'genericTank',
    LABEL: 'Middle',
    GUNS: Class.mid.GUNS,
    TURRETS: [{
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "mid3",
    }]
};
Class.mid3 = {
    PARENT: 'genericTank',
    LABEL: 'Middle',
    GUNS: Class.mid.GUNS,
    TURRETS: [{
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "mid4",
    }]
};
Class.mid4 = {
    PARENT: 'genericTank',
    LABEL: 'Middle',
    GUNS: Class.mid.GUNS,
    TURRETS: [{
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "mid5",
    }]
};
Class.mid5 = {
    PARENT: 'genericTank',
    LABEL: 'Middle',
    GUNS: Class.mid.GUNS,
    TURRETS: [{
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "mid6",
    }]
};
Class.mid6 = {
    PARENT: 'genericTank',
    LABEL: 'Middle',
    GUNS: Class.mid.GUNS,
    TURRETS: [{
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "mid7",
    }]
};
Class.mid7 = {
    PARENT: 'genericTank',
    LABEL: 'Middle',
    GUNS: Class.mid.GUNS,
    TURRETS: [{
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "mid8",
    }]
};
Class.mid8 = {
    PARENT: 'genericTank',
    LABEL: 'Middle',
    GUNS: Class.mid.GUNS,
    TURRETS: [{
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "back",
    }]
};
Class.back = {
   PARENT: 'genericTank',
   LABEL: 'Back',
   GUNS: [ {
        POSITION: [ 18, 8, 1, 0, 0, -150, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, {recoil: 2, reload: 0.25}]),
            TYPE: "bullet"
        }
        }, {
        POSITION: [ 18, 8, 1, 0, 0, 150, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, {recoil: 2, reload: 0.25}]),
            TYPE: "bullet"
        }
        }, 
        {
            POSITION: [ 15, 11, 1, 0, 0, -90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
            }, {
            POSITION: [ 15, 11, 1, 0, 0, 90, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
            }, 
    ],
};
Class.longfighter = {
    PARENT: 'genericTank',
    LABEL: 'Fiiiiiiiighter',
    GUNS: [ {
        POSITION: [ 18, 7, 1, 0, 0, 0, 0, ],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet"
        }
        }, {
        POSITION: [ 15, 11, 1, 0, 0, -90, 0, ],
                PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
            TYPE: "bullet"
        }
        }, {
        POSITION: [ 15, 11, 1, 0, 0, 90, 0, ],
                PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
            TYPE: "bullet"
        }
        },
    ],
    TURRETS: [
    {
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: "mid",
    }
    ]
};

Class.diamondShape = {
    PARENT: ["basic"],
    LABEL: "Rotated Body",
    SHAPE: 4.5
};

Class.mummyHat = {
    SHAPE: 4.5,
    COLOR: -1
};
Class.mummy = {
    PARENT: ["drone"],
    SHAPE: 4,
    NECRO: [4],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
Class.ssplit = {
    PARENT: "genericTank",
    LABEL: "Super splitter",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.damagemuch, g.damagemuch, g.damagemuch]),
                TYPE: ["supersplitBullet"]
            }
        },
        {
            POSITION: [14, 2.5, 1, 0, 2, 0, 0],
            PROPERTIES: {COLOR: 12}
        },
        {
            POSITION: [14, 2.5, 1, 0, -2, 0, 0],
            PROPERTIES: {COLOR: 12}
        }
    ]
}
Class.smulti = {
    PARENT: "genericTank",
    LABEL: "Super Multiplier",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.damagemuch, g.damagemuch, g.damagemuch]),
                TYPE: ["multiBullet"]
            }
        },
        {
            POSITION: [14, 5, 1, 0, 0, 0, 0],
            PROPERTIES: {COLOR: 12}
        }
    ]
}
Class.tankar = {
    PARENT: "genericTank",
    LABEL: "Tank?",
    GUNS: [ {
          POSITION: [ 18, 8, 1, 0, 0, 90, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, -90, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, 67.5, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, -67.5, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, 45, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, -45, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, 22.5, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, -22.5, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 8, 1, 0, 0, 144, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.reloadmuch, g.annihilator]),
             TYPE: "bullet",
          }, }, 
      ],
 };
 
Class.mummifier = {
    PARENT: ["genericTank"],
    LABEL: "Mummifier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 10,
    GUNS: [{
        POSITION: [5.5, 13, 1.1, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    },{
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
Class.miscTestHelper2 = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload 3",
    MIRROR_MASTER_ANGLE: true,
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
};
Class.miscTestHelper = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload 2",
    //MIRROR_MASTER_ANGLE: true,
    COLOR: {
        BASE: -1,
        BRIGHTNESS_SHIFT: 15,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
    TURRETS: [
        {
          POSITION: [20, 0, 20, 30, 0, 1],
          TYPE: "miscTestHelper2",
        }
    ]
};
Class.miscTest = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload",
    COLOR: "teal",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 30, 0, 1],
            TYPE: "miscTestHelper",
        }
    ]
};
Class.mmaTest2 = {
    PARENT: ["genericTank"],
    MIRROR_MASTER_ANGLE: true,
    COLOR: "grey",
    GUNS: [{
            POSITION: [40, 4, 1, -20, 0, 0, 0],
        }],
}
Class.mmaTest1 = {
    PARENT: ["genericTank"],
    COLOR: -1,
    // Somehow, removing the gun below causes a crash when the tank is chosen ??????
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
        }
    ],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "mmaTest2",
        }
    ]
}
Class.mmaTest = {
    PARENT: ["genericTank"],
    LABEL: "Mirror Master Angle",
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "mmaTest2",
        },
        {
            POSITION: [20, 0, 20, 0, 360, 1],
            TYPE: "mmaTest1",
        },
    ]
}
Class.necroinfinite = {
    PARENT: "genericTank",
    LABEL: "Necro∞",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 150,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.reloadmuch, g.reloadmuch]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.reloadmuch, g.reloadmuch]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.reloadmuch, g.reloadmuch]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.reloadmuch, g.reloadmuch]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
}

Class.vulnturrettest_turret = {
    PARENT: "genericTank",
    COLOR: "grey",
    HITS_OWN_TYPE: 'hard',
    LABEL: 'Shield',
    COLOR: 'teal',
}

Class.vulnturrettest = {
    PARENT: ["genericTank"],
    LABEL: "Vulnerable Turrets",
    TOOLTIP: "[DEV NOTE] Vulnerable turrets are still being worked on and may not function as intended!",
    BODY: {
        FOV: 2,
    },
    DANGER: 6,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet'
        }
    }],
    TURRETS: (() => {
        let output = []
        for (let i = 0; i < 10; i++) {
            output.push({
                POSITION: {SIZE: 20, X: 40, ANGLE: (360/10)*i},
                TYPE: "vulnturrettest_turret",
                VULNERABLE: true
            })
        }
        return output
    })(),
};

Class.turretLayerTesting = {
    PARENT: 'genericTank',
    LABEL: 'Turret Layer Testing',
    TURRETS: [
        {
            POSITION: [20, 10, 10, 0, 0, 2],
            TYPE: ["basic", {COLOR: "lightGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, 15, 5, 0, 0, 2],
            TYPE: ["basic", {COLOR: "grey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, 10, -5, 0, 0, 1],
            TYPE: ["basic", {COLOR: "darkGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, -10, -5, 0, 0, -2],
            TYPE: ["basic", {COLOR: "darkGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, -10, 5, 0, 0, -1],
            TYPE: ["basic", {COLOR: "grey", MIRROR_MASTER_ANGLE: true}]
        },
    ]
}

Class.alphaGunTest = {
    PARENT: "basic",
    LABEL: "Translucent Guns",
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ALPHA: 0.5
        }
    }]
}

// unfinished
Class.strokeWidthTest = {
    PARENT: "basic",
    LABEL: "Stroke Width Test",
    STROKE_WIDTH: 2,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            STROKE_WIDTH: 0.5
        }
    }]
}

Class.onTest = {
    PARENT: 'genericTank',
    LABEL: "'ON' property",
    TOOLTIP: [
        'Refer to Class.onTest to know more ',
        'On collide is a bit buggy right now, please use other methods until its fixed'
    ],
    ON: [{
        event: "fire",
        handler: ({ body, gun }) => {
            switch (gun.identifier) {
                case 'mainGun':
                    body.sendMessage('fired main gun')
                    break;
                case 'secondaryGun':
                    body.sendMessage('fired secondary gun')
                    break;
            }
        }
    }, {
        event: "altFire",
        handler: ({ body, gun }) => {
            body.sendMessage('fired alt gun')
        }
    }, {
        event: "death",
        handler: ({ body, killers, killTools }) => {
            body.sendMessage('you died')
        }
    }, {
        event: "collide",
        handler: ({ instance, other }) => {
            instance.sendMessage('collide!')
        }
    }, {
        event: "damage",
        handler: ({ body, damageInflictor, damageTool }) => {
            body.SIZE += damageInflictor[0].SIZE / 2
            damageInflictor[0].kill()
        }
    }],
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'mainGun'
        }
    }, {
        POSITION: { ANGLE: 90 },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ALT_FIRE: true
        }
    }, {
        POSITION: { ANGLE: 180, DELAY: 0.5 },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'secondaryGun'
        }
    }]
}

Class.auraBasicGen = addAura();
Class.auraBasic = {
    PARENT: ["genericTank"],
    LABEL: "Aura Basic",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraBasicGen"
        }
    ],
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
};
Class.auraHealerGen = addAura(-1);
Class.auraHealer = {
    PARENT: ["genericTank"],
    LABEL: "Aura Healer",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraHealerGen"
        }
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};

Class.ghoster_ghostForm = {
    PARENT: ['genericTank'],
    TOOLTIP: 'You are now hidden, roam around and find your next target. You will be visible again in 5 seconds',
    LABEL: 'Ghoster',
    BODY: {
        SPEED: 20,
        ACCELERATION: 10,
        FOV: base.FOV + 1,
    },
    GUNS: [{
        POSITION: { WIDTH: 20, LENGTH: 20 },
    }],
    ALPHA: 0.6,
}

Class.ghoster = {
    PARENT: ['genericTank'],
    LABEL: 'Ghoster',
    TOOLTIP: 'Shooting will hide you for 5 seconds',
    BODY: {
        SPEED: base.SPEED,
        ACCELERATION: base.ACCEL,
    },
    ON: [
        {
            event: 'fire',
            handler: ({ body }) => {
                body.define(Class.ghoster_ghostForm)
                setTimeout(() => {
                    body.SPEED = 1e-99
                    body.ACCEL = 1e-99
                    body.FOV *= 2
                    body.alpha = 1
                }, 2000)
                setTimeout(() => {
                    body.SPEED = base.SPEED
                    body.define(Class.ghoster)
                }, 2500)
            }
        }
    ],
    GUNS: [{
        POSITION: {WIDTH: 20, LENGTH: 20},
        PROPERTIES: {
            TYPE: 'bullet',
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
        }
    }],
    ALPHA: 1,
}

Class.switcheroo = {
    PARENT: "basic",
    LABEL: 'Switcheroo',
    UPGRADES_TIER_0: [],
    RESET_UPGRADE_MENU: true,
    ON: [
        {
            event: "fire",
            handler: ({ body, globalMasterStore: store, gun }) => {
                if (gun.identifier != 'switcherooGun') return
                store.switcheroo_i ??= 0;
                store.switcheroo_i++;
                store.switcheroo_i %= 6;
                body.define(Class.basic.UPGRADES_TIER_1[store.switcheroo_i]);
                setTimeout(() => body.define("switcheroo"), 6000);
            }
        }
    ],
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'switcherooGun'
        }
    }]
}

Class.vanquisher = {
    PARENT: ["genericTank"],
    DANGER: 8,
    LABEL: "Vanquisher",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    //destroyer
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
            TYPE: "bullet"
        }

    //builder
    },{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
    },{
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
            TYPE: "setTrap",
            STAT_CALCULATOR: gunCalcNames.block
        }

    //launcher
    },{
        POSITION: [10, 9, 1, 9, 0, 90, 0],
    },{
        POSITION: [17, 13, 1, 0, 0, 90, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery]), TYPE: "minimissile", STAT_CALCULATOR: gunCalcNames.sustained }

    //shotgun
    },{
        POSITION: [4, 3, 1, 11, -3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 3, 1, 11, 3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 4, 1, 13, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 12, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 11, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 3, 1, 13, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 3, 1, 13, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 2, 1, 13, 2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [1, 2, 1, 13, -2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [15, 14, 1, 6, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]), TYPE: "casing" }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 270, 0],
    }]
};
Class.armyOfOneBullet = {
    PARENT: ["bullet"],
    LABEL: "Unstoppable",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
    ],
};
Class.armyOfOne = {
    PARENT: ["genericTank"],
    LABEL: "Army Of One",
    DANGER: 9,
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        SPEED: 0.5 * base.SPEED,
        FOV: 1.8 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [21, 19, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }]),
                TYPE: "armyOfOneBullet",
            },
        },{
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, g.fake]),
                TYPE: "bullet",
            },
        }
    ],
};
Class.weirdAutoBasic = {
    PARENT: "genericTank",
    LABEL: "Weirdly defined Auto-Basic",
    GUNS: [{
        POSITION: {
            LENGTH: 20,
            WIDTH: 10
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1]]),
            TYPE: "bullet"
        },
    }],
    TURRETS: [{
        POSITION: {
            ANGLE: 180,
            LAYER: 1
        },
        TYPE: ["autoTurret", {
            CONTROLLERS: ["nearestDifferentMaster"],
            INDEPENDENT: true
        }]
    }]
};

Class.tooltipTank = {
    PARENT: 'genericTank',
    LABEL: "Tooltips",
    UPGRADE_TOOLTIP: "Allan please add details"
}
Class.oneliner = {PARENT: 'genericTank', LABEL: "One Liner", UPGRADE_TOOLTIP: "This tank is defined all in one line", GUNS:[{POSITION: [25, 10, 1, 0, 0, 0, 0], PROPERTIES: {SHOOT_SETTINGS: combineStats([g.basic]), TYPE: ['bullet'],}}]}

Class.bulletSpawnTest = {
    PARENT: 'genericTank',
    LABEL: "Bullet Spawn Position",
    GUNS: [
        {
            POSITION: [20, 10, 1, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {speed: 0, maxSpeed: 0, shudder: 0, spray: 0, recoil: 0}]),
                TYPE: ['bullet', {BORDERLESS: true}],
                BORDERLESS: true,
            }
        }, {
            POSITION: [50, 10, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {speed: 0, maxSpeed: 0, shudder: 0, spray: 0, recoil: 0}]),
                TYPE: ['bullet', {BORDERLESS: true}],
                BORDERLESS: true,
            }
        }
    ]
}

Class.propTestProp = {
    PARENT: 'genericTank',
    SHAPE: 6,
    COLOR: 0,
    GUNS: [
        {
            POSITION: [20, 10, 1, 0, 0, 45, 0],
            PROPERTIES: {COLOR: 13},
        }, {
            POSITION: [20, 10, 1, 0, 0, -45, 0],
            PROPERTIES: {COLOR: 13},
        }
    ]
}
Class.propTest = {
    PARENT: 'genericTank',
    LABEL: 'Deco Prop Test',
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        }
    ],
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 1],
            TYPE: 'propTestProp'
        }
    ]
}

Class.levels = menu("Levels")
Class.levels.UPGRADES_TIER_0 = []
for (let i = 0; i < 12; i++) {
    let LEVEL = i * c.TIER_MULTIPLIER;
    Class["level" + LEVEL] = {
        PARENT: ["levels"],
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    Class.levels.UPGRADES_TIER_0.push("level" + LEVEL);
}

Class.teams = menu("Teams")
Class.teams.UPGRADES_TIER_0 = []
for (let i = 1; i <= 8; i++) {
    let TEAM = i;
    Class["Team" + TEAM] = {
        PARENT: ["teams"],
        TEAM: -TEAM,
        COLOR: getTeamColor(-TEAM),
        LABEL: "Team " + TEAM
    };
    Class.teams.UPGRADES_TIER_0.push("Team" + TEAM);
}
Class['Team' + TEAM_ROOM] = {
    PARENT: ["teams"],
    TEAM: TEAM_ROOM,
    COLOR: "yellow",
    LABEL: "Room Team"
};
Class['Team' + TEAM_ENEMIES] = {
    PARENT: ["teams"],
    TEAM: TEAM_ENEMIES,
    COLOR: "yellow",
    LABEL: "Enemies Team"
};
Class.teams.UPGRADES_TIER_0.push('Team' + TEAM_ROOM, 'Team' + TEAM_ENEMIES);

Class.testing = menu("Testing")

Class.addons = menu("Addon Entities")
Class.addons.UPGRADES_TIER_0 = []

Class.whirlwindDeco = makeDeco(6)
Class.whirlwindDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.whirlwind = {
    PARENT: "genericTank",
    LABEL: "Whirlwind",
    ANGLE: 60,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "whirlwindDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 6; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 60}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
let testLayeredBoss = new LayeredBoss("testLayeredBoss", "Test Layered Boss", "terrestrial", 7, 3, "terrestrialTrapTurret", 5, 7, {SPEED: 10});
testLayeredBoss.addLayer({gun: {
    POSITION: [3.6, 7, -1.4, 8, 0, null, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, { size: 0.5 }]),
        TYPE: ["minion", {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
    },
}}, true, null, 16);
testLayeredBoss.addLayer({turret: {
    POSITION: [10, 7.5, 0, null, 160, 0],
    TYPE: "crowbarTurret",
}}, true);

Class.developer.UPGRADES_TIER_0 = ["tanks", "bosses", "spectator", "levels", "teams", "eggGenerator", "testing", "addons", "skills", "yt", ["developer", "developer"]];
    Class.tanks.UPGRADES_TIER_0 = ["basic", "TKoA", "cb", "longfighter", "wrongGameBud", "peaksignaler", "pinput", "rooster", "randomAmountCannonTest", "doughNut", "developerbutpeak", "oneliner", "necroinfinite", "smulti", "ssplit", "tankar", "fastmf", "clearer", "threeSixtyGrower", "unavailable", "arenaCloser", "dominators", "sanctuaries", "mothership", "baseProtector", "antiTankMachineGun", "turkey"];
    Class.skills.UPGRADES_TIER_0 = ["max1", "max2", "max3", "max4", "max5", "max6", "max7"]
        Class.unavailable.UPGRADES_TIER_0 = ["healer", "whirlwind"];
        Class.dominators.UPGRADES_TIER_0 = ["destroyerDominator", "gunnerDominator", "trapperDominator"];
        Class.sanctuaries.UPGRADES_TIER_0 = ["sanctuaryTier1", "sanctuaryTier2", "sanctuaryTier3", "sanctuaryTier4", "sanctuaryTier5", "sanctuaryTier6"];

    Class.bosses.UPGRADES_TIER_0 = ["sentries", "elites", "mysticals", "nesters", "rogues", "rammers", "terrestrials", "celestials", "eternals", "devBosses"];
        Class.sentries.UPGRADES_TIER_0 = ["sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap", "sentinelMinigun", "sentinelLauncher", "sentinelCrossbow"];
        Class.elites.UPGRADES_TIER_0 = ["eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner", "eliteTrapGuard", "eliteSpinner", "eliteSkimmer", "legionaryCrasher", "guardian", "defender", "sprayerLegion"];
        Class.mysticals.UPGRADES_TIER_0 = ["sorcerer", "summoner", "enchantress", "exorcistor", "shaman"];
        Class.nesters.UPGRADES_TIER_0 = ["nestKeeper", "nestWarden", "nestGuardian"];
        Class.rogues.UPGRADES_TIER_0 = ["roguePalisade", "rogueArmada", "julius", "genghis", "napoleon"];
	    Class.rammers.UPGRADES_TIER_0 = ["bob", "nemesis"];
        Class.terrestrials.UPGRADES_TIER_0 = ["ares", "gersemi", "ezekiel", "eris", "selene"];
        Class.celestials.UPGRADES_TIER_0 = ["paladin", "freyja", "zaphkiel", "nyx", "theia", "atlas", "rhea", "julius", "genghis", "napoleon"];
        Class.eternals.UPGRADES_TIER_0 = ["odin", "kronos"];
        Class.devBosses.UPGRADES_TIER_0 = ["taureonBoss", "zephiBoss", "dogeiscutBoss", "trplnrBoss", "frostBoss", "toohtlessBoss", "anguishboss", "anguishbossp2", "anguishbossp3", "ramboss", "osamabinladen"];

    Class.testing.UPGRADES_TIER_0 = ["diamondShape", "greentealcolortest", "miscTest", "mmaTest", "vulnturrettest", "onTest", "alphaGunTest", "strokeWidthTest", "testLayeredBoss", "tooltipTank", "turretLayerTesting", "bulletSpawnTest", "propTest", "auraBasic", "auraHealer", "weirdAutoBasic", "ghoster", "switcheroo", "armyOfOne", "vanquisher", "mummifier"]