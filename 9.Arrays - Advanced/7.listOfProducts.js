function sortProducts(listOfProducts) {

    let sortedProducts = listOfProducts.sort();
    for (let index = 0; index < sortedProducts.length; index++) {
        console.log(`${index+1}.${sortedProducts[index]}`);
        
    }
    
}

sortProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])