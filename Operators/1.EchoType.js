function echo(number) {
    console.log(typeof number);
    if (typeof number == 'number' || typeof number == 'string' ) {
        console.log(`${number}`);
    }else{
        console.log(`Parameter is not suitable for printing`);
    }
}


