require("./projects_data.js");

var num_products = 5;

// Can be called "i, counter, count" 
var count = 1;

while(count <= num_products) {
    console.log( `${count}. ${eval('name' + count)}` );
    count++;
    if(count > num_products/2)  {
        break;
    }
}
console.log('That\'s all we have!');