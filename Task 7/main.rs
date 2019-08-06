extern crate regex;
use regex::Regex;
use std::io;

fn main() {
    let re = Regex::new(r"[a-z]+@[a-z]{2,8}[.][a-z]{2,8}[.]?[a-z]*").unwrap();
    let mut input = String::new();
    println!("Enter you're email:", );
    match io::stdin().read_line(&mut input) {
        Ok(_) =>{
             println!("Got what you entered ", );
        },
        Err(e) => println!("Ops something went wrong :{}",e )
    
    }
    if re.is_match(&mut input) == true {
        println!("Valid Email", )
    }
    else {
        println!("Invalid Email", )
    }
}