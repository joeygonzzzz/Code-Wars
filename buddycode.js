//Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

//Can you help her?

//Examples
//greeting("Matt") -> "Hello, Matt!"
//greeting("Mubashir") -> "Hello, my Love!"

function greeting(name) {
    if(name == "Mubashir") {
      return "Hello, my Love!";
    } else {
          return "Hello, " + name +'!'
      }
  }