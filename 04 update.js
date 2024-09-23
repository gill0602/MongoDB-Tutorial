//enter the values
db.inventory.insertMany( [
    { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
    { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
 ] );

 //updates the first encountered value
 employees> db.inventory.updateOne(
        { item: "paper" },
        {
          $set: { "size.uom": "cm", status: "P" },
         $currentDate: { lastModified: true }
        }
     )
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    employees> db.inventory.findOne({item:"paper"})
    {
      _id: ObjectId('66f0f2129e31712e11c73c08'),
      item: 'paper',
      qty: 100,
      size: { h: 8.5, w: 11, uom: 'cm' },
      status: 'P',
      lastModified: ISODate('2024-09-23T04:52:06.269Z')
    }

//updates  the values that meet the specified conditions
employees> db.inventory.updateMany(
        { "qty": { $lt: 50 } },
        {
          $set: { "size.uom": "in", status: "P" },
          $currentDate: { lastModified: true }
        }
     )
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 3,
      modifiedCount: 3,
      upsertedCount: 0
    }
employees> db.inventory.find({ qty:{$lt:50} })
[
  {
    _id: ObjectId('66f0f2129e31712e11c73c04'),
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'in' },
    status: 'P',
    lastModified: ISODate('2024-09-23T05:02:03.449Z')
  },
  {
    _id: ObjectId('66f0f2129e31712e11c73c06'),
    item: 'mousepad',
    qty: 25,
    size: { h: 19, w: 22.85, uom: 'in' },
    status: 'P',
    lastModified: ISODate('2024-09-23T05:02:03.450Z')
  },
  {
    _id: ObjectId('66f0f2129e31712e11c73c0a'),
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'in' },
    status: 'P',
    lastModified: ISODate('2024-09-23T05:02:03.450Z')
  }
]
//Replace any single data entry
employees> db.inventory.replaceOne(
        { item: "paper" },
        { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] }
     )
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    employees> db.inventory.find({ item:"paper" })
    [
      {
        _id: ObjectId('66f0f2129e31712e11c73c08'),
        item: 'paper',
        instock: [ { warehouse: 'A', qty: 60 }, { warehouse: 'B', qty: 40 } ]
      }
    ]
