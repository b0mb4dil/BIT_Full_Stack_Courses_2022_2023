const size = 25;
let result = '';

for(let y = 0; y < size; y++) {
    for(let x = 0; x < size; x++) {
        if (y === x || x === (size - y) - 1) {
            result += '<span style="color: red;">*</span>';
        } else if (y === (x + 6) || x === (size - y) + 5) {
            result += '<span style="color: red;">*</span>';
        } else if (y === (x + 18) || x === (size - y) + 5) {
            result += '<span style="color: red;">*</span>';
        } else if (y === (x - 6) || x === (size - y) - 6) {
            result += '<span style="color: red;">*</span>';
        } else if( y === 12 || x === 12) {
            result += '<span style="color: red;">*</span>';
        } else {
            result += '*';
        }
    }
    result += '<br>';
}
document.write(result);




// const size = 25;

// for(let y = 0; y < size; y++) {
//     for(let x = 0; x < size; x++) {
//         if(y === x || x === (size - y) - 1) {
//             document.write('<span style="color: red;">*</span>')
//         } else {
//             document.write('*');
//         }
//     }
//     document.write('<br>');
// }
