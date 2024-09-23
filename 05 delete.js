//delete every document
employees> db.inventory.deleteMany({})
{ acknowledged: true, deletedCount: 10 }
employees> db.inventory.find({})

//delete documents with a specific condition
employees> db.inventory.insertMany( [
    ...    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    ...    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    ...    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    ...    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    ...    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    ... ] );
    {
      acknowledged: true,
      insertedIds: {
        '0': ObjectId('66f0fafd9e31712e11c73c0d'),
        '1': ObjectId('66f0fafd9e31712e11c73c0e'),
        '2': ObjectId('66f0fafd9e31712e11c73c0f'),
        '3': ObjectId('66f0fafd9e31712e11c73c10'),
        '4': ObjectId('66f0fafd9e31712e11c73c11')
      }
    }
    employees> db.inventory.deleteMany({status:"A"})
    { acknowledged: true, deletedCount: 2 }
    employees> db.inventory.find({})
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
      },
      {
        _id: ObjectId('66f0fafd9e31712e11c73c10'),
        item: 'planner',
        qty: 75,
        size: { h: 22.85, w: 30, uom: 'cm' },
        status: 'D'
      }
    ]
//Delete only one document with the specific condition
db.inventory.deleteOne( { status: "D" } )