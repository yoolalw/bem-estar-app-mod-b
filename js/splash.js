const urlFetch = 'https://workspace.dinizeotecnologia.com.br/seletiva_pr_a2/status'
async function statusb() {
    try {
        const response = await fetch(urlFetch);
        if(response.ok){
            setTimeout(() => {
                window.location.href = "login.html"
            }, 3000);
        }

    }
    catch(e) {
        console.log(e)
    }
}statusb()