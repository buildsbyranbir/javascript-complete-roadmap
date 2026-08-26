// ==========================================
// Part 13: Higher Order Array Methods
// ==========================================


// ==========================================
// 1. forEach()
// ==========================================

// forEach array er prottekta element er upor kaj kore
// eta notun array return kore na

const users = ["Rahim", "Karim", "Hasan"]

users.forEach((user, index) => {
    console.log(index, user)
})


// Object array er sathe forEach

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 }
]

products.forEach(product => {
    console.log(product.name)
})


// ==========================================
// 2. map()
// ==========================================

// map prottekta element modify kore
// ebong notun array return kore

const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(number => {
    return number * 2
})

console.log(doubled)


// Short version

const tripled = numbers.map(number => number * 3)

console.log(tripled)


// Object array theke sudhu name ber kora

const names = products.map(product => product.name)

console.log(names)


// Object modify kora

const updatedProducts = products.map(product => {
    return {
        ...product,
        priceWithTax: product.price * 1.1
    }
})

console.log(updatedProducts)


// index use kora

const indexedProducts = products.map((product, index) => {
    return {
        id: index + 1,
        name: product.name,
        price: product.price
    }
})

console.log(indexedProducts)


// ==========================================
// 3. filter()
// ==========================================

// filter condition true hole oi element gula niye
// notun array return kore

const ages = [12, 18, 20, 15, 25, 30]

const adults = ages.filter(age => age >= 18)

console.log(adults)


// Product filter

const expensiveProducts = products.filter(product => {
    return product.price > 10000
})

console.log(expensiveProducts)


// Multiple condition

const selectedProducts = products.filter(product => {
    return product.price >= 1000 && product.price <= 30000
})

console.log(selectedProducts)


// ==========================================
// 4. find()
// ==========================================

// find condition true howar por
// sudhu first matching element return kore

const numbers2 = [10, 20, 30, 40, 50]

const result = numbers2.find(number => number > 25)

console.log(result)


// Object array

const product = products.find(product => {
    return product.name === "Phone"
})

console.log(product)


// Kichu na pele undefined return kore

const unknownProduct = products.find(product => {
    return product.name === "Tablet"
})

console.log(unknownProduct)


// ==========================================
// 5. findIndex()
// ==========================================

// findIndex condition true howar por
// matching element er index return kore

const index = numbers2.findIndex(number => number === 30)

console.log(index)


// Object array

const phoneIndex = products.findIndex(product => {
    return product.name === "Phone"
})

console.log(phoneIndex)


// Kichu na pele -1 return kore

const tabletIndex = products.findIndex(product => {
    return product.name === "Tablet"
})

console.log(tabletIndex)


// ==========================================
// 6. reduce()
// ==========================================

// reduce multiple value ke ekta single value te convert kore
// sum, total, average, counting etc e khub beshi use hoy

const prices = [100, 200, 300, 400]

const total = prices.reduce((sum, price) => {
    return sum + price
}, 0)

console.log(total)


// Short version

const total2 = prices.reduce((sum, price) => sum + price, 0)

console.log(total2)


// Product price total

const totalPrice = products.reduce((total, product) => {
    return total + product.price
}, 0)

console.log(totalPrice)


// Maximum value ber kora

const maxNumber = numbers2.reduce((max, number) => {
    return number > max ? number : max
}, numbers2[0])

console.log(maxNumber)


// Minimum value ber kora

const minNumber = numbers2.reduce((min, number) => {
    return number < min ? number : min
}, numbers2[0])

console.log(minNumber)


// Array theke object banano

const users2 = [
    { id: 1, name: "Rahim" },
    { id: 2, name: "Karim" },
    { id: 3, name: "Hasan" }
]

const userObject = users2.reduce((acc, user) => {
    acc[user.id] = user
    return acc
}, {})

console.log(userObject)


// ==========================================
// 7. some()
// ==========================================

// some check kore array te kompakhe ekta element
// condition satisfy kore kina
// result true ba false

const numbers3 = [1, 3, 5, 8, 9]

const hasEvenNumber = numbers3.some(number => {
    return number % 2 === 0
})

console.log(hasEvenNumber)


// User admin kina check

const hasAdmin = users2.some(user => {
    return user.name === "Karim"
})

console.log(hasAdmin)


// ==========================================
// 8. every()
// ==========================================

// every check kore array er sob element
// condition satisfy kore kina
// result true ba false

const numbers4 = [2, 4, 6, 8]

const allEven = numbers4.every(number => {
    return number % 2 === 0
})

console.log(allEven)


// Sob product er price positive kina

const allPricesValid = products.every(product => {
    return product.price > 0
})

console.log(allPricesValid)


// ==========================================
// 9. flat()
// ==========================================

// flat nested array ke ek level e niye ase

const nestedArray = [1, 2, [3, 4], [5, 6]]

const flatArray = nestedArray.flat()

console.log(flatArray)


// Multiple level nested array

const deeplyNested = [1, [2, [3, [4, 5]]]]

const flatOneLevel = deeplyNested.flat()

console.log(flatOneLevel)


// Sob level flat korte Infinity use kora jay

const completelyFlat = deeplyNested.flat(Infinity)

console.log(completelyFlat)


// ==========================================
// 10. flatMap()
// ==========================================

// flatMap basically map + flat(1)
// ek sathe map kore ebong ek level flat kore

const words = ["Hello World", "JavaScript Developer"]

const splitWords = words.flatMap(word => {
    return word.split(" ")
})

console.log(splitWords)


// Example

const numbers5 = [1, 2, 3]

const multipliedArray = numbers5.flatMap(number => {
    return [number, number * 2]
})

console.log(multipliedArray)


// ==========================================
// 11. map + filter
// ==========================================

// Real project e map ar filter ek sathe onek use hoy

const products2 = [
    { name: "Laptop", price: 50000, active: true },
    { name: "Phone", price: 20000, active: false },
    { name: "Mouse", price: 1000, active: true }
]

const activeProductNames = products2
    .filter(product => product.active)
    .map(product => product.name)

console.log(activeProductNames)


// ==========================================
// 12. filter + map + reduce
// ==========================================

// Prothome active product filter
// tarpor price ber kora
// tarpor sob price jog kora

const activeProductTotal = products2
    .filter(product => product.active)
    .map(product => product.price)
    .reduce((total, price) => total + price, 0)

console.log(activeProductTotal)


// ==========================================
// 13. map + reduce
// ==========================================

// Product theke sudhu price niye total kora

const productTotal = products2
    .map(product => product.price)
    .reduce((total, price) => total + price, 0)

console.log(productTotal)


// ==========================================
// 14. find + optional chaining
// ==========================================

// User khuje tar name access kora
// user na pele error na diye undefined dibe

const foundUser = users2.find(user => user.id === 2)

console.log(foundUser?.name)


// ==========================================
// 15. some + every practical example
// ==========================================

const students = [
    { name: "Rahim", marks: 80 },
    { name: "Karim", marks: 65 },
    { name: "Hasan", marks: 40 }
]


// Kew pass koreche kina

const someonePassed = students.some(student => {
    return student.marks >= 40
})

console.log(someonePassed)


// Sobai pass koreche kina

const everyonePassed = students.every(student => {
    return student.marks >= 40
})

console.log(everyonePassed)


// ==========================================
// 16. reduce diye counting
// ==========================================

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

const fruitCount = fruits.reduce((count, fruit) => {

    count[fruit] = (count[fruit] || 0) + 1

    return count

}, {})

console.log(fruitCount)


// ==========================================
// 17. reduce diye group kora
// ==========================================

const people = [
    { name: "Rahim", role: "developer" },
    { name: "Karim", role: "designer" },
    { name: "Hasan", role: "developer" },
    { name: "Jamal", role: "designer" }
]

const groupedPeople = people.reduce((groups, person) => {

    if (!groups[person.role]) {
        groups[person.role] = []
    }

    groups[person.role].push(person)

    return groups

}, {})

console.log(groupedPeople)


// ==========================================
// 18. Method chaining
// ==========================================

// Ekadhik array method ek sathe use kora
// Real world application e eta khub common

const result2 = products2
    .filter(product => product.active)
    .map(product => ({
        name: product.name,
        price: product.price
    }))
    .filter(product => product.price > 5000)

console.log(result2)


// ==========================================
// 19. callback function bujha
// ==========================================

// Higher Order Method er vitore
// je function pass kori seta callback function

const callbackExample = numbers.map(number => {
    return number * 2
})

console.log(callbackExample)


// ekhane number => number * 2 hocche callback function


// ==========================================
// 20. Important difference
// ==========================================

// forEach
// sudhu loop chalanor jonno

numbers.forEach(number => {
    console.log(number)
})


// map
// notun modified array dorkar hole

const newNumbers = numbers.map(number => number * 2)


// filter
// condition onujayi multiple element dorkar hole

const filteredNumbers = numbers.filter(number => number > 2)


// find
// condition onujayi first element dorkar hole

const firstNumber = numbers.find(number => number > 2)


// findIndex
// matching element er index dorkar hole

const firstIndex = numbers.findIndex(number => number > 2)


// reduce
// array ke single value te convert korte

const sum = numbers.reduce((total, number) => {
    return total + number
}, 0)


// some
// kompakhe ekta element condition fulfill kore kina

const hasBigNumber = numbers.some(number => number > 10)


// every
// sob element condition fulfill kore kina

const allPositive = numbers.every(number => number > 0)


// flat
// nested array ke flatten korte

const flattened = [1, [2, 3], [4, 5]].flat()


// flatMap
// map + flat ek sathe korte

const mappedAndFlattened = numbers.flatMap(number => {
    return [number, number * 2]
})


// ==========================================
// 21. Real Full Stack Example
// ==========================================

const orders = [
    {
        id: 1,
        customer: "Rahim",
        amount: 500,
        status: "completed"
    },
    {
        id: 2,
        customer: "Karim",
        amount: 800,
        status: "pending"
    },
    {
        id: 3,
        customer: "Hasan",
        amount: 1200,
        status: "completed"
    }
]


// Completed order gula ber kora

const completedOrders = orders.filter(order => {
    return order.status === "completed"
})

console.log(completedOrders)


// Completed order er customer name ber kora

const completedCustomers = orders
    .filter(order => order.status === "completed")
    .map(order => order.customer)

console.log(completedCustomers)


// Completed order er total amount

const completedTotal = orders
    .filter(order => order.status === "completed")
    .reduce((total, order) => {
        return total + order.amount
    }, 0)

console.log(completedTotal)


// Kono order pending ache kina

const hasPendingOrder = orders.some(order => {
    return order.status === "pending"
})

console.log(hasPendingOrder)


// Sob order er amount positive kina

const validOrders = orders.every(order => {
    return order.amount > 0
})

console.log(validOrders)


// Specific order khuja

const order = orders.find(order => order.id === 2)

console.log(order)


// Specific order er index

const orderIndex = orders.findIndex(order => order.id === 2)

console.log(orderIndex)