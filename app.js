console.log("Hello World!\n==========\n");

// Exercise 1 Section

for (let i = 1; i < 99; i += 2) {
    console.log(i);
}

// MORE IMPLEMENTATIONS
// for (let i = 0; i < 100; i++) {
//    if (i % 2 == 0) {
//        continue:
//    } else {
//        console.log(i);
//    }
// }

// for (let i = 1; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// let i = 1;
// while (i < 100) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }

//     i++;
// }

// let x = 1;

// do {
//     if (x % 2 == 1) {
//         console.log(x);
//     }

//     x++;
//  } while (x < 100);

// Exercise 2 Section

// for (let i = 1; i <= 100; i ++) {
//     let output = "";
// 
//     if (i % 3 == 0) {
//         output += "FIZZ";
//     }
// 
//     if (i % 5 == 0) {
//         output += "BUZZ";
//     }
// 
//     console.log(`${i} ${output});
// }


// for (let i = 1; i <= 100; i++) {
//     if (i % 15 == 0) {
//         console.log(i, "FIZZBUZZ")
//     } else if (i % 5 == 0) {
//         console.log(i, "BUZZ");
//     } else if (i % 3 == 0) {
//         console.log(i, "FIZZ");
//     }
// } 

// for (let i = 1; i < 100; i++) {
//     if (i % 3 == 0 && i % 5 === 0) {
//         console.log(i, "FIZZBUZZ");
//     } else {
//         if (i % 3 == 0) {
//             console.log(i, "FIZZ");
//         } else  if (i % 5 == 0) {
//             console.log(i, "BUZZ"); 
//         } else {
//             console.log(i);
//         }
//     }
// }

// for (let i = 1; i < 100; i++) {
//     console.log(i);

//     if (i % 3 == 0 && i % 5 === 0) {
//         console.log("FIZZBUZZ");
//     } else {
//         if (i % 3 == 0) {
//             console.log("FIZZ");
//         }

//         if (i % 5 == 0) {
//             console.log("BUZZ");
//         }
//     }
// }
let i = 1;

while (i  <= 100) {
    let output = "";

    if (i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++
}

let x = 1;

do  {
    let output = "";

    if (x % 3 == 0) {
        output += "FIZZ";
    }

    if (x % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${x} ${output}`);

    x++
} while (x <= 100);
