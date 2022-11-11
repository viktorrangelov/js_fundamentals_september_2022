function convert(givenJson) {
    let person = JSON.parse(givenJson);
    for (const key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }


}
convert('{"name": "George", "age": 40, "town": "Sofia"}')