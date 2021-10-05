function slug(name) {
    var baseSlug = name.split(" ").join("-");
    return  baseSlug.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '')
            .toLowerCase();
}

var formAdd = document.querySelector('#form-add');
formAdd.addEventListener('submit', function(e){
    e.preventDefault();
    const post = {
        id: Math.random().toString(5).substr(2),
        name: document.querySelector('#nameProduct').value,
        cate_id: document.querySelector('#categoryProduct').value,
        price: parseInt(document.querySelector('#priceProduct').value),
        priceold: parseInt(document.querySelector('#oldProduct').value),
        detail: document.querySelector('#detailProduct').value,
        image: document.querySelector('#imageProduct').value,
        slug: slug(document.querySelector('#nameProduct').value),
    }

    axios.post('http://localhost:3000/products', post)
    .then(() => alert('Thêm thành công'))
    // .then(response => window.location = './index.html')
    .catch(() => alert('Thêm thất bại'))
})