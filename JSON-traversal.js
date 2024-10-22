// input
const data = {
    "name": "John",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    },
    "phoneNumbers": [
      {
        "type": "home",
        "number": "555-555-1234"
      },
      {
        "type": "work",
        "number": "555-555-5678"
      }
    ]
  };

//   solution

function iterate (data) {
    let output = ''
   function traverseTheJson(data,  path=''){
        for(let key in data){
       if(typeof data[key] === 'object'){
          
            traverseTheJson(data[key],`${path}.${key}` );
       }else{
           output += `${path}.${key} is ${data[key]},`
       }
   }
       
   }
   traverseTheJson(data);
   
   return output;
    }
iterate(data);

// output

  const output =  '.name is John,.age is 30,.address.street is 123 Main St,.address.city is New York,.address.state is NY,.address.zip is 10001,.phoneNumbers.0.type is 