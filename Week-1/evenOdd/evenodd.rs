use std::io;

fn main() {
    println!("Enter a number: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let num: i32 = input.trim().parse().expect("Please enter a valid number");
    let result = ["Even", "Odd"][(num % 2 != 0) as usize];
    println!("{}", result);
}