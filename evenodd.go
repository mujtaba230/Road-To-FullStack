package main

import ("fmt")

func EvenOdd(num int) string {
    results := [2]string{"Even", "Odd"}  
    return results[num%2]
}

func main() {
    var n int
    fmt.Print("Enter a number: ")
    fmt.Scan(&n)
    fmt.Println(EvenOdd(n))
}