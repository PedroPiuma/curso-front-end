const user = {
    name: "Luís",
    age: 29,
    lista: [1, 2, 3],
    obj: {
        p1: 1,
        p2: 'oi',
        'com-hifen': 9,
    },
}

console.log(user)

user.age = 30

console.log(user)
console.log(user.lista[0])
console.log(user.obj)
console.log(user.obj.p1)
console.log(user.obj.p2)
console.log(user.obj['com-hifen'])


let dic = {
    abacaxi: "fruta",
    alface: "verdura",
}

console.log(dic.abacaxi)
