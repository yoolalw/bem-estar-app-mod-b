console.log('a')
const user = document.getElementById('username')
const pass = document.getElementById('password')
const subm = document.getElementById('submit')

subm.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('aa')

    async function login() {
        try {
            const response = await fetch('https://workspace.dinizeotecnologia.com.br/seletiva_pr_a2/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: user.value,
                    password: pass.value
                })
            })
            if(response.ok){ 
                console.log(response.status)
                const data = await response.json()
                
                console.log(data.token)

                localStorage.setItem('token', data.token)
                console.log(localStorage.getItem('token'))
            }
        } catch (e) {
            console.log(e)
        }
    }
    login()
})

