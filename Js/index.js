fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
        let tabla ="";

        data.forEach(user => {
            tabla += `
            <tr>
                <td>${user.id}</td>
                <td>${user.title}</td>
                <td>${user.price}</td>
                <td>${user.description}</td>
                <td>${user.imageS}</td>
                <td>${user.creationAt}</td>
                <td>${user.UpdatedAt}</td>
                <td>${user.category}</td>
            </tr>
            `
        })
        document.getElementById('tblUsers').innerHTML = tabla;


    })