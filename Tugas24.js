function Tugas24() {
    var bilangan = ["32", "33", "16", "40", "9", "7", "11", "2", "44", "1", "66"]

    console.log("Sebelumnya   : ".concat(bilangan).trim());
    console.log("Ascending    : "+bilangan.sort().join().trim());
    console.log("Descending   : "+bilangan.reverse().join().trim());
}
Tugas24();