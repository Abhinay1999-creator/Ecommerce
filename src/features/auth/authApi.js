export function createUser(userData) {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json();
        resolve({ data })
    })
}

export function checkUser(logInInfo) {
    return new Promise(async (resolve, reject) => {
        const email = logInInfo.email;
        const password = logInInfo.password
        const response = await fetch("http://localhost:8080/users?email=" + email)
        const data = await response.json();
        if (data.length) {
            if (password === data[0].password) {
                resolve({ data: data[0] })
            } else {
                reject("Wrong Credantials")
            }
        } else {
            reject("User Not Found")
        }

    })
}


export function SignOut(userId) {
    return new Promise(async (resolve) => {
        resolve({ data:"Success" })
    })
}

export function UpdateUser(update) {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/users/"+ update.id, {
            method: "PATCH",
            body: JSON.stringify(update),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json();
        resolve({ data })
    })
}
