const createTri = (high) => {
  for (let i = 0; i < high; i++) {
    let tri = '';
    for (let j = 1; j < high-i; j++) {
      tri = tri + ' ';
    }
    for (let k = 1; k <= (2*i+1); k++) {
      tri = tri + '*';
    }
    console.log(tri);
  }
}
console.log(createTri(5));