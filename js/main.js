var product_all = document.querySelector('.all_product');
var $q = document.querySelector.bind(document);
var $qAll = document.querySelectorAll.bind(document);

var url = window.location.search;
const urlParams = new URLSearchParams(url);
const page = urlParams.get('page');
var urlAPI = `http://localhost:3000/products?_page=${page}&_limit=10`;

//page next
page ? pageSrc(page) : pageSrc(1);
function pageSrc(pageNumber) {
    var pageIteam = document.querySelectorAll('.page-item');
    if (pageNumber == 1) {
        pageIteam[0].classList.add('disabled');
    }
    pageIteam.forEach(e => {
        e.classList.remove('active');
    });

    $qAll('.page-item')[pageNumber].classList.add('active');
    $q('#previous_').href = '?page=' + (parseInt(pageNumber) - 1);
    $q('#next_').href = '?page=' + (parseInt(pageNumber) + 1);
}

// hien  thi ban dau
axios.get(urlAPI)
    .then(res =>
        product_all.innerHTML = res.data.map(data =>
            showData(data.id, data.image, data.name, data.price, data.priceold, data.slug)
        ).join('')
    )

//sap xep tang giam

var sort_price_all = document.querySelector('#sort_price_all');
sort_price_all.addEventListener('change', function () {
    axios.get(urlAPI + '&_sort=price&_order=' + sort_price_all.value)
        .then(res =>
            product_all.innerHTML = res.data.map(data =>
                showData(data.id, data.image, data.name, data.price, data.priceold, data.slug)
            ).join('')
        )
})

//show data dung chung
function showData(id, image, name, price, priceold, slug) {
    return `<div class="box_sp col-md-2">
            <a href="./product-detail.html?id=${id}">
                <img width="100%" alt="" style="object-fit: contain"
                src="${image}">
                    
                <div class="content_sp">
                    <p class="title_sp">${name}</p>
                    <p class="price_sp">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</p>
                    <p class="price_sp_old">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceold)}</p>
                </div>
                <div class="giamgia">-${parseInt(priceold - price) / (parseInt(priceold)) * 100}%</div>
            </a>
            <img src="https://cf.shopee.vn/file/b809934fa3b980baaa303cf5c32eae22" alt="" class="giamgia_img">
        </div>`
}
