console.log("a")
const token = localStorage.getItem('token')
console.log(token)
async function ativs() {
    try {
        const response = await fetch("https://workspace.dinizeotecnologia.com.br/seletiva_pr_a2/desafio/2", {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        if (response.ok) {
            console.log(response.status)
            const data = await response.json()
            console.log(data)

        } else {
            console.log('erro no token')
        }
    } catch (e) {
        console.log("error de response")
        console.log(e)
    }
} ativs()

function sobre() {
    window.location.href = "sobre.html"
}

function desafios() {
    window.location.href = "desafios.html"
}