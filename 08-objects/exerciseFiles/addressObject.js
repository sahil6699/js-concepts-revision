// street
// city
// zipCode
// showAddress(address)- that takes address obj and displays all prop of address object along with the values

let address = {
  street: "ram gali",
  city: "faridabad",
  zipCode: 121001,
};

function showAddress(obj) {
  for (let key in obj) console.log(key, obj[key]);
}

showAddress(address);
