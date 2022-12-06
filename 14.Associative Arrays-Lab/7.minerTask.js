function miner(input) {
    let containerObject = {};

   for (let index = 0; index < input.length; index+=2) {
        let gradient = input[index];
        let amount = Number(input[index +1]);
      
        if (!containerObject.hasOwnProperty(gradient)) {
            containerObject[gradient] = 0;
        }
        containerObject[gradient] +=amount;
    
   }
   for (const gradient in containerObject) {
        console.log(`${gradient} -> ${containerObject[gradient]}`);
        
    }
   }

miner([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])