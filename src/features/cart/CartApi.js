export function addToCart(item) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json();
        resolve({ data })
    })
}

export function fetchItemsById(userId) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart?user=' + userId)
        const data = await response.json();
        resolve({ data })
    })
}

export function UpdateCart(update) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart/' + update.id, {
            method: 'PATCH',
            body: JSON.stringify(update),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json();
        resolve({ data })
    })
}

export function DeleteCartItem(itemId) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart/' + itemId, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json();
        resolve({ data: { id: itemId } })
    })
}


export async function ResetCartItems(userId) {
    return new Promise(async (resolve) => {
   const response =  fetchItemsById(userId)
   const items = response.data;
   for(let item in items){
    await DeleteCartItem(item.id)
   }
   resolve({status:"Success"})
})
}

