// Buat satu variable baru, dengan nama dataSuhu, elemen 1 sampai 2 adalah number
// kemudian elemen ke 3 dan 4 adalah function
// elemen 3 adalah function yang konversi elemen 1 dari celcius ke fahrenheit
//  elemen ke 4 adalah function yang konversi elemen 2 dari fahrenheit ke celcius
const dataSuhu = [
    30,//celcius
    86,//fahrenheit

    function () {
        return(dataSuhu[0] * 9/5) + 32;
    },

    function () {
        return(dataSuhu[1] - 32) * 5/9;
    }
];

console.log(dataSuhu[2]());
console.log(dataSuhu[3]());