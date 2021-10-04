var product_all = document.querySelector('.all_product');

var url = window.location.search;
const urlParams = new URLSearchParams(url);
const page = urlParams.get('page');

//sap xep tang giam
var sort_price_all = document.querySelector('#sort_price_all');
sort_price_all.addEventListener('change', function () {
    console.log(sort_price_all.value)
    axios.get('http://localhost:3000/products?_sort=price&_order='+sort_price_all.value)
        .then(res =>
            product_all.innerHTML = res.data.map(data =>
                `<div class="box_sp col-md-2">
            <a href="./product-detail.html?id=${data.id}">
                <img width="100%" alt="" style="object-fit: contain"
                src="${data.image}">
                    
                <div class="content_sp">
                    <p class="title_sp">${data.name}</p>
                    <p class="price_sp">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}</p>
                    <p class="price_sp_old">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.priceold)}</p>
                </div>
                <div class="giamgia">-${parseInt(data.priceold-data.price)/(parseInt(data.priceold))*100}%</div>
            </a>
            <img src="https://cf.shopee.vn/file/b809934fa3b980baaa303cf5c32eae22" alt="" class="giamgia_img">
        </div>`
            ).join('')
        )
})
//sap xep tang giam


axios.get('http://localhost:3000/products?_page=' + page + '&_limit=10')
    .then(res =>
        product_all.innerHTML = res.data.map(data =>
            `<div class="box_sp col-md-2">
            <a href="./product-detail.html?id=${data.id}">
                <img width="100%" alt="" style="object-fit: contain"
                src="${data.image}">
                    
                <div class="content_sp">
                    <p class="title_sp">${data.name}</p>
                    <p class="price_sp">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}</p>
                    <p class="price_sp_old">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.priceold)}</p>
                </div>
                <div class="giamgia">-${parseInt(data.priceold-data.price)/(parseInt(data.priceold))*100}%</div>
            </a>
            <img src="https://cf.shopee.vn/file/b809934fa3b980baaa303cf5c32eae22" alt="" class="giamgia_img">
        </div>`
        ).join('')
    )




