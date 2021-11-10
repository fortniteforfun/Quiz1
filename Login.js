function adduser(){
    player1=document.getElementById("player1nameinput").value
    player2=document.getElementById("player2nameinput").value
    localStorage.setItem("player1name",player1)
    localStorage.setItem("player2name",player2)
    window.location.replace("Game.html")
}