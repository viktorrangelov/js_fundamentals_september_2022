function language(country){
    switch (country) {
        case 'USA':
            console.log('Spanish');
            break;
        case 'England':
            console.log('English');
            break;
        case 'Argentina':
            console.log('Spanish');
            break;
        case 'Spain':
            console.log('Spanish');
            break;
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }
}

language('Spain');