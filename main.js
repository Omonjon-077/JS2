let users = {
    
}
for (let i = 0; i < 2; i++) {
    var user1 = prompt(`Ismingizni kiriting?`)
    var age1 = +prompt(`Yoshingizni kiriting?`)
    users[i + 1] = {
        name: user1,
        age: age1
    }
}

for (const key in users) {
    console.log(`Foydalanuvchi: ${key}`);
    console.log(`Ismi: ${users[key].name}`);
    console.log(`Yoshi: ${users[key].age}`);
}


obj = cartObj()
let vip = '';
let sum = 0;
const delivery = 9000;
for (const key in obj) {
  for (const keys in obj[key]) {
     if(keys == 'info'){
    vip += key + obj[key][keys] + ", " 
    } else if (keys == 'price') {
        sum += obj[key][keys]
    }
  }
}          
console.log(`Sizning buyurtmangiz: ${vip}| yetkazib berish xizmati bilan bo'lgan narx ${sum + delivery} yetkazib berish narxi ${delivery}`);


//By Omonjon Sobirov