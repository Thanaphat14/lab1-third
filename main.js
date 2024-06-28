const{ createApp, ref} = Vue

createApp({
    setup(){
        const product = ref ('Boots')
        const image = ref ('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory = ref(100)
        const description =ref ("greats socks")
        const onSale = ref(true)
        return{
            product,
            image,
            description,
            link:"https://www.camt.cmu.ac.th/index.php/th/" ,
            inStock,
            inventory,
            onSale
        }
    }

}).mount('#app')