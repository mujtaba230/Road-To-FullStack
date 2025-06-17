package main
import "fmt"

func sayHello() {
    fmt.Println("Hello from a.go")
}
func Greet(){
	fmt.Println("Hello !!!")

}



func main() {

	fmt.Println("Hello, Go!")

	numbers := []int{1, 2, 3, 4, 5, 6}
	fmt.Println("Functional : ", process(numbers))

	result := processImperative(numbers)
	fmt.Println("Imperative : ", result)

	evens := filter(numbers, func(n int) bool { return n%2 == 0 })
	squares := mapInts(evens, func(n int) int { return n * n })

	fmt.Println("Declarative : ", squares)
}
