//show product
var show = document.querySelector('#show');
axios.get('http://localhost:3000/products?_page=1&_limit=16')
.then(response => show.innerHTML = response.data.map((data, index) => 
     `<tr>
        <th scope="row">${++index}</th>
        <td>${data.name}</td>
        <td>${data.price}</td>
        <td><img width="80px" src="${data.image}" alt=""></td>
        <td><a class="btn btn-primary"href="./edit.html?id=${data.id}">Sửa</a></td>
        <td><button class="btn btn-danger bnt-confirm-delete" data-target="#deleteProduct" value="${data.id}" data-toggle="modal" href="./index.html?id=${data.id}">Xóa</button></td>
    </tr>`
    ).join(''))
    .then(() => {
        var bntDelete = document.querySelectorAll('.bnt-confirm-delete');
        bntDelete.forEach(e => {
                e.addEventListener('click', function() {
                document.querySelector('#delete_ok').value = e.value;
            });
        });
    })
    .then(() => {
        var confirmA = document.querySelector('#delete_ok');
        confirmA.addEventListener('click', function(e) {
            axios.delete('http://localhost:3000/products/' + this.value)
        })

    })