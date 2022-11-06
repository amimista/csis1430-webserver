let username = prompt("What's your name?");
let age = prompt("How old are you?");
let month = prompt("What is your birth-month?")

if(age < 50) {
  alert(`So, ${username}. You're ${age} years old, huh? Let's see, that was in ${month}... That's still pretty young!`)
} else if(age >= 50) {
  alert(`So, ${username}. You're ${age} years old, huh? Imagine being born in ${month}. What are you, a dinosaur?`)
}
