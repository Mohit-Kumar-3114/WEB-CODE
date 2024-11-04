const express = require('express');
const app = express();




// Middleware to parse/identify JSON in the request body
app.use(express.urlencoded({extended:true}))
app.use(express.json());




// Example array
let items = ['item1', 'item2', 'item3'];




// GET request to retrieve all items
app.get('/items', (req, res) => {
    res.json(items); // ["item1","item2","item3"] res.json is same as res.send but res.json send data in json format
});




// POST request to add a new item
app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json({ message: 'Item added', newItem }); // {"message": "Item added","newItem": "item4"}
});




// PUT request to update an existing item
app.put('/items/:index', (req, res) => {
    // const { index } = req.params; 
    const index = req.params.index
    const updatedItem = req.body.item;
    items[index] = updatedItem;
    res.json({ message: `Item updated`, updatedItem }); // {"message": "Item updated", "updatedItem": "item4"}
});




// DELETE request to remove an item
app.delete('/items/:index', (req, res) => {
    const index  = req.params.index;
    items.splice(index, 1);
    res.json({ message: `Item at index ${index} deleted` }); // {"message": "Item at index 1 deleted" }
});




// Start the server
const PORT = 5004;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
