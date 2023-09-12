//reduce()

l1 = [10, 20, 30, 40, 50]

function f1(x, y){
    return x + y
}

console.log(l1.reduce(f1)) //150

// 10 20 : 30
// 30 30 : 60
// 60 40 : 100
// 100 50 : 150