function randomNumber(){
  var randomNum =  Math.floor((Math.random() * 6) + 1)
  return "images/" + "dice" + randomNum + ".png"
}

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomNumber())

var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomNumber())


//var text = document.querySelectorAll("h1").innerHTML = "Player 1 wins!"
