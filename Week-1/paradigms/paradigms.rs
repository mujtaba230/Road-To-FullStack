// --------------------------------
// Imperative style
fn imperative_example() {
    let numbers = vec![1, 2, 3, 4, 5, 6];
    let mut result = Vec::new();

    for num in numbers {
        if num % 2 == 0 {
            result.push(num * num);
        }
    }

    println!("Imperative: {:?}", result); // [4, 16, 36]
}

// --------------------------------
// Declarative style
fn declarative_example() {
    let numbers = vec![1, 2, 3, 4, 5, 6];
    let result: Vec<i32> = numbers
        .iter()
        .filter(|&&n| n % 2 == 0)
        .map(|&n| n * n)
        .collect();

    println!("Declarative: {:?}", result); // [4, 16, 36]
}

// --------------------------------
// Functional style 
fn is_even(n: i32) -> bool {
    n % 2 == 0
}

fn square(n: i32) -> i32 {
    n * n
}

fn functional_example() {
    let numbers = vec![1, 2, 3, 4, 5, 6];
    let result: Vec<i32> = numbers
        .into_iter()
        .filter(|n| is_even(*n))
        .map(square)
        .collect();

    println!("Functional: {:?}", result); // [4, 16, 36]
}

// --------------------------------
// Main
fn main() {
    println!("Rust is successfully set up and running!\n");

    imperative_example();
    declarative_example();
    functional_example();
}