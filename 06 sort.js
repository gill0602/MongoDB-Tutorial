//Limit function
employees> db.inventory.find().limit(1)
[
  {
    _id: ObjectId('66f0fafd9e31712e11c73c0e'),
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'P'
  }
]
employees> db.inventory.find().limit(2)
[
  {
    _id: ObjectId('66f0fafd9e31712e11c73c0e'),
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'P'
  },
  {
    _id: ObjectId('66f0fafd9e31712e11c73c0f'),
    item: 'paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D'
  }
]
//TO skip n number of entries/documents
employees> db.inventory.find().skip(1)

// To sort the documents on the basis of a specific criteria
//ascending order
employees> db.inventory.find().sort({qty:1})
//descending order
employees> db.inventory.find().sort({qty:-1})

//Achieving pagination using MongoDB find,limit & skip

db.blogs.find().skip((pageNo-1)*no).limit(8)
db.blogs.find().skip(0).limit(8)
db.blogs.find().skip(8).limit(8)
