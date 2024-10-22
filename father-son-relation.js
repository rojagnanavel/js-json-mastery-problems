const input = {
    "ganesh": ["gans", "poops"],
    "gans": ["peps"],
    "gana": ["ganesh"]
  };
  
// solution *****
const getRelationship = () => {
    const parentLookup = {};
    const output = {};
  
  // Build the reverse lookup table
  for (const parent in input) {
    for (const child of input[parent]) {
      parentLookup[child] = parent;
    }
  }
  
  // Build the output object
  for (const person in input) {
    const children = input[person];
    const father = parentLookup[person] || null;
  
    // Create the entry for this person
    output[person] = {
      father: father,
      son: children
    };
  }
  
  // Ensure to include people who are not in the children list but are in the input
  for (const person in parentLookup) {
    if (!(person in output)) {
      output[person] = {
        father: parentLookup[person],
        son: []
      };
    }
  }
    return console.log(JSON.stringify(output, null,2));;
  }
  
  getRelationship();

//  below is the output
 const output = 
 {
   "ganesh": {
     "father": "gana",
     "son": [
       "gans",
       "poops"
     ]
   },
   "gans": {
     "father": "ganesh",
     "son": [
       "peps"
     ]
   },
   "gana": {
     "father": null,
     "son": [
       "ganesh"
     ]
   },
   "poops": {
     "father": "ganesh",
     "son": []
   },
   "peps": {
     "father": "gans",
     "son": []
   }
 };
 
  