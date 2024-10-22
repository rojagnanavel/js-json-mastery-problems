// input
const jsonData = { name: "John", address: { street: "123 Elm St", city: "Springfield", zipcode: "12345" }, contacts: [ {type: "email", value: "john@example.com" }, { type: "phone", value: "555-1234" } ] };

// solution
function flattenJSON(jsonObj, parentKey = '', sep = '_') {
    let items = {};
    for (const [key, value] of Object.entries(jsonObj)) {
        const newKey = parentKey ? `${parentKey}${sep}${key}` : key;

        if (typeof value === 'object' && value !== null) {
            if (Array.isArray(value)) {
                // Handle arrays
                value.forEach((item, index) => {
                    Object.assign(items, flattenJSON(item, `${newKey}${sep}${index}`, sep));
                });
            } else {
                // Handle nested objects
                Object.assign(items, flattenJSON(value, newKey, sep));
            }
        } else {
            // Base case: if it's a primitive value
            items[newKey] = value;
        }
    }
    return items;
}

const flattened = flattenJSON(jsonData); 
console.log(JSON.stringify(flattened, null, 4));
// output
const output = {
    "name": "John",
    "address_street": "123 Elm St",
    "address_city": "Springfield",
    "address_zipcode": "12345",
    "contacts_0_type": "email",
    "contacts_0_value": "john@example.com",
    "contacts_1_type": "phone",
    "contacts_1_value": "555-1234"
}
