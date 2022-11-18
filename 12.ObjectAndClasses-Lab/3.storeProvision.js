function checkAvailability(currentStock, delivery) {
    let storeObject = {};
    for (let index = 0; index <currentStock.length; index+=2) {
        let product = currentStock[index];
        let quantity = Number(currentStock[index+1]);

        if (!storeObject.hasOwnProperty(product)) {
            storeObject[product] = quantity;
        }}
    for (let j = 0; j < delivery.length; j+=2) {
        let product = delivery[j];
        let quantity = Number(delivery[j+1]);

        if (!storeObject.hasOwnProperty(product)) {
            storeObject[product] = 0;
        }
        storeObject[product]+= quantity;

        
    }
    for (const key in storeObject) {
        console.log(`${key} -> ${storeObject[key]}`)
    }
   
    
}

checkAvailability([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])