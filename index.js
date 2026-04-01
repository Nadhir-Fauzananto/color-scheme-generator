document.getElementById("btn-generate").addEventListener("click", e => {
    let randomHex = (Math.random().toString(16)).slice(2,8)
    let schemeMode = document.getElementById("mode-select").value
    let fetchURL = "https://www.thecolorapi.com/scheme?hex=" + randomHex + "&mode=" + schemeMode + "&count=5"
    console.log(randomHex)
    fetch(fetchURL)
        .then(res => res.json())
        .then(data => {
            const hexColorOne = data.colors[0].hex.value
            const hexColorTwo = data.colors[1].hex.value
            const hexColorThree = data.colors[2].hex.value
            const hexColorFour = data.colors[3].hex.value
            const hexColorFive = data.colors[4].hex.value
            document.getElementById("color-1").textContent=hexColorOne
            document.getElementById("color-1").style.backgroundColor=hexColorOne
            document.getElementById("color-2").textContent=hexColorTwo
            document.getElementById("color-2").style.backgroundColor=hexColorTwo
            document.getElementById("color-3").textContent=hexColorThree
            document.getElementById("color-3").style.backgroundColor=hexColorThree
            document.getElementById("color-4").textContent=hexColorFour
            document.getElementById("color-4").style.backgroundColor=hexColorFour
            document.getElementById("color-5").textContent=hexColorFive
            document.getElementById("color-5").style.backgroundColor=hexColorFive
        })
})

