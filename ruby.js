const firebase = require('firebase')

const myapp = firebase.initializeApp({databaseURL: "https://ruby-126210.firebaseio.com"}, 'ruby')
const mydb = myapp.database()

_fetchProductsByCategory = function(category) {
    return new Promise(resolve => {
        const ref = mydb.ref('/products').orderByChild('category').equalTo(category)
        ref.on('value', snapshot => {
            resolve(snapshot.val())
        })
    })
}

_fetchProductById = function(key) {
    return new Promise(resolve => {
        const ref = mydb.ref('/products/').orderByKey().equalTo(key)
        ref.on('value', snapshot => {
            resolve(snapshot.val()[key])
        })
    })
}

exports.fetch = function(path) {
    return new Promise((resolve, reject) => {
        const subpath = path.replace('/ruby/', '').replace('length/', '').split('/')
        const type = subpath[0]
        const param = subpath[1]

        if (type === 'fashion' || type === 'electronics') {
            return _fetchProductsByCategory(type).then(resolve)
        } else if (type === 'product') {
            return _fetchProductById(param).then(resolve)
        }
        
        reject(new Error(`Invalid type: ${type}, or params: ${param}`))
    });
}
