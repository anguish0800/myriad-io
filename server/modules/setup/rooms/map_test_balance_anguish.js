let { base1:  _1 , base1protected:  p1  } = require('../tiles/tdm.js'),
    { wall: WALL, normal:   __ , nest } = require('../tiles/misc.js'),
room = [
    [ __ , __ , __ , __ , __ , __ ],
    [ __ , __ , __ , __ , __ , __ ],
    [ __ , __ ,nest,nest, __ , __ ],
    [ __ , __ ,nest,nest, __ , __ ],
    [ __ , __ , __ , __ , __ , __ ],
    [ __ , __ , __ , __ , __ , __ ],
];

module.exports = room;