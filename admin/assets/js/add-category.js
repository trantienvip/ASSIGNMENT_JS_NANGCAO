var formAdd = document.querySelector('#form-add');
formAdd.addEventListener('submit', function(e){
    e.preventDefault();
    const category = {
        id: Math.random().toString(9).substr(2, 9),
        name: document.querySelector('#nameCategory').value,
    }

    axios.post('http://localhost:3000/categories', category)
    .then(() => alert('Thêm thành công'))
    .catch(error => alert('Thêm thất bại => '+error.response.data))
})