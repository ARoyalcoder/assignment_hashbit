function scopeTest() {
  var a = "I am var";      
  let b = "I am let";      
  const c = "I am const";  

  if (true) {
    var a = "Re-declared var"; 
    let b = "Block-scoped let";
    const c = "Block-scoped const";
    console.log("Inside block:", a, b, c);
  }

  console.log("Outside block:", a, b, c);
}
scopeTest();
