fetch("https://www.carboninterface.com/api/v1/auth", {
    headers: {
        "Authorization": "Bearer 8vHiI0CHYkyzOgNzqsIVuA"
    }
})
a.then((response)=>{()=> return response.json()})
.then((response)=>{console.log(response)})

