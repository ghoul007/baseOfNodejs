const ShoppingList = require('./eventEmitter/ShoppingList');

const myShoppingList = new ShoppingList();

myShoppingList.on('added',(list)=>{
    console.log('added', list);
    
});

myShoppingList.on('orange',(data)=>{
    console.log('success', data);
    
});

myShoppingList.on('error',(error)=>{
    console.log('error', error.message);
    
});


myShoppingList.add('camembert')
myShoppingList.add('orange')
myShoppingList.add('tabac')
myShoppingList.add('haricots')




// process.stdin.on('data', (data) => {
//     console.log(data.toString());
// })