function convert(firstName, lastName, hairColour) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColour,
    }
    console.log(JSON.stringify(person));

}
convert('George', 'Jones','Brown');
