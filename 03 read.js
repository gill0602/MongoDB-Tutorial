//To read the data
db.inventory.find( {} )
//output
[
    {
      _id: ObjectId('66f048cd9e31712e11c73bfb'),
      item: 'journal',
      qty: 25,
      tags: [ 'blank', 'red' ],
      size: { h: 14, w: 21, uom: 'cm' }
    },
    {
      _id: ObjectId('66f048cd9e31712e11c73bfc'),
      item: 'mat',
      qty: 85,
      tags: [ 'gray' ],
      size: { h: 27.9, w: 35.5, uom: 'cm' }
    },
    {
      _id: ObjectId('66f048cd9e31712e11c73bfd'),
      item: 'mousepad',
      qty: 25,
      tags: [ 'gel', 'blue' ],
      size: { h: 19, w: 22.85, uom: 'cm' }
    }
  ]

  //To specify a certain condition we use 
  employees> db.inventory.find({qty:25})
[
  {
    _id: ObjectId('66f048cd9e31712e11c73bfb'),
    item: 'journal',
    qty: 25,
    tags: [ 'blank', 'red' ],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    _id: ObjectId('66f048cd9e31712e11c73bfd'),
    item: 'mousepad',
    qty: 25,
    tags: [ 'gel', 'blue' ],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
]
employees> db.inventory.find({item:'mousepad'})
[
  {
    _id: ObjectId('66f048cd9e31712e11c73bfd'),
    item: 'mousepad',
    qty: 25,
    tags: [ 'gel', 'blue' ],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
]
//For fetching data with a particular condition
employees> db.inventory.find({ tags:{$in:['gray','red']}})
[
  {
    _id: ObjectId('66f048cd9e31712e11c73bfb'),
    item: 'journal',
    qty: 25,
    tags: [ 'blank', 'red' ],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    _id: ObjectId('66f048cd9e31712e11c73bfc'),
    item: 'mat',
    qty: 85,
    tags: [ 'gray' ],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  }
]
//AND Condition status should be A AND qty should be <30
employees> db.inventory.find( { status: "A", qty: { $lt: 30 } } )
[
  {
    _id: ObjectId('66f050dc9e31712e11c73bfe'),
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
  }
]
//OR Condition
employees> db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
[
  {
    _id: ObjectId('66f050dc9e31712e11c73bfe'),
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
  },
  {
    _id: ObjectId('66f050dc9e31712e11c73bff'),
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A'
  },
  {
    _id: ObjectId('66f050dc9e31712e11c73c02'),
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  }
]
//AND and OR Condition Together-status -A & qty<30 or item starts with letter p
employees> db.inventory.find( {
          status: "A",
          $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
     } )
    [
      {
        _id: ObjectId('66f050dc9e31712e11c73bfe'),
        item: 'journal',
        qty: 25,
        size: { h: 14, w: 21, uom: 'cm' },
        status: 'A'
      },
      {
        _id: ObjectId('66f050dc9e31712e11c73c02'),
        item: 'postcard',
        qty: 45,
        size: { h: 10, w: 15.25, uom: 'cm' },
        status: 'A'
      }
    ]
// To get the output as a document
employees> db.inventory.findOne({status:{$in:['A','D']}})
{
  _id: ObjectId('66f050dc9e31712e11c73bfe'),
  item: 'journal',
  qty: 25,
  size: { h: 14, w: 21, uom: 'cm' },
  status: 'A'
}