for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); //5 5 5 5 5
  }, 1000);
}

//method 1

for (var i = 0; i < 5; i++) {
  setTimeout(
    i => {
      console.log(i); // 0 1 2 3 4
    },
    1000,
    i
  );
}

//or

for (var i = 0; i < 5; i++) {
  setTimeout(console.log, 1000, i);
}

//method 2

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// method 3

for (var i = 0; i < 5; i++) {
  (i => {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

//method4

for (var i = 0; i < 5; i++) {
  try {
    throw new Error(i.toString());
  } catch ({ message: i }) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
