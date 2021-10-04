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
        <td><a class="btn btn-danger"href="./index.html?id=${data.id}">Xóa</a></td>
    </tr>`
    ).join(''))


//del products
var url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get('id');
if (id) {
    axios.delete('http://localhost:3000/products/' + id)
    .then(response => window.location = './index.html')
}