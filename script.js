//1
let count = 0
while (count < 10) {
    count++
    console.log(count)
}

//2
let count2 = 0
while (count2 < 10) {
    count2++
    if (count2 === 5) {
        continue
    }
    if (count2 == 8) {
        break
    }
    console.log(count2)

}

//3
let count3 = 0
do {
    count3++;
    console.log(count3);
} while (count3 < 5)

//4

while (true) {
    const input = prompt("Введите число (введите 10 для выхода):");
    
    if (Number(input) === 10) {
      console.log("Вы ввели 10. Цикл завершен.");
      break;
    }
  
    console.log("Вы ввели:", input, "- Попробуйте снова.");
  }
  

//5
for(let i = 1;i<11;i++){
    console.log(i)
}

//6
for (let i = 1 ;; ){
    if(i>100){
        break
    };
    console.log(i);
    i++;
}

//7
let numbers1 = [1,2,3,4,5]
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
  }

//8 
const numbers = [10, 20, 30, 40, 50]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

let input

while (input !== "yes") {
  input = prompt("Введите 'yes' для продолжения:");
}

console.log("Продолжаем!");

  
//9
let numbers2 =[]
for ( let i = 0;;){
    i++
    numbers2.push(i)
    if (i==10){
        break
    }
}
console.log(numbers2.reverse())

//10
for (let i = 1;i<=10;i++){
    if (i%2==0){
        console.log(i)
    }
    else{
        continue
    }
    
}