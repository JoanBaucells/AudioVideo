document.querySelector(".seguent").addEventListener(
    'click',
    test
)

function test(){
    var text = document.querySelector(".pagina")
    var s = text.split("/")
    text.textContent= s[0]+1 & "/" & s[1]
}
