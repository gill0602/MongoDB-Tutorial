///insert one entry
db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )
 //output 
 {
    acknowledged: true,
    insertedId : ObjectId('66f03ae19e31712e11c73bf8')
  }
  //insert many entries at once
  db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])
 //ouput
 {
    acknowledged: true,
    insertedIds: {
      '0': ObjectId('66f048cd9e31712e11c73bfb'),
      '1': ObjectId('66f048cd9e31712e11c73bfc'),
      '2': ObjectId('66f048cd9e31712e11c73bfd')
    }
  }