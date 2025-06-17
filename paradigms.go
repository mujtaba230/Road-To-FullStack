package main

// 1. Imperative  (in main function)
func processImperative(nums []int) []int {
	var result []int
	for _, n := range nums {
		if n%2 == 0 {
			result = append(result, n*n)
		}
	}
	return result
}

// 2. Declarative

func filter(nums []int, test func(int) bool) []int {
	var result []int
	for _, n := range nums {
		if test(n) {
			result = append(result, n)
		}
	}
	return result
}

func square(n int) int {
    return n*n
}
func mapInts(nums []int, transform func(int) int) []int {
	var result []int
	for _, n := range nums {
		result = append(result, transform(n))
	}
	return result
}

//  functional

func isEven(n int) bool {
	return n%2 == 0
}



func process(nums []int) []int {
	var result []int
	for _, n := range nums {
		if isEven(n) {
			result = append(result, square(n))
		}
	}
	return result
}
