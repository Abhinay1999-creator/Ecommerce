export function fetchAllProduct() {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        console.log(data)
        resolve({ data });
    })
}

export function fetchAllProductByID(id) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/products/' + id);
        const data = await response.json();
        console.log(data)
        resolve({ data });
    })
}

export function fetchAllProductFilter(filter, sort, pagination) {

    let queryString = '';
    for (let key in filter) {
        const categoryValues = filter[key];
        if (categoryValues.length) {
            const lastCategoryValue = categoryValues[categoryValues.length - 1];
            queryString += `${key}=${lastCategoryValue}&`
        }
    }

    for (let key in sort) {
        queryString += `${key}=${sort[key]}&`
    }

    for (let key in pagination) {
        queryString += `${key}=${pagination[key]}&`
    }



    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/products?' + queryString);
        const data = await response.json();
        console.log(data)
        const totalItems = await response.headers.get('X-Total-Count')
        resolve({ data: { products: data, totalItems: +totalItems } });

    })
}

export function fetchAllCategories() {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/categories');
        const data = await response.json();
        console.log(data)
        resolve({ data });
    })
}


export function fetchAllBrands() {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/brands');
        const data = await response.json();
        console.log(data)
        resolve({ data });
    })
}
