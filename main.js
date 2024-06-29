const{ createApp, ref} = Vue

createApp({
    setup(){
        const product = ref ('Boots')
        const image = ref ('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory = ref(100)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const sizes = ref([
            'size S',
            'size M',
            'size L'
        ])
        const variants = ref([
            {id: 2234, color: 'green',image: './assets/images/socks_green.jpg'},
            {id: 2235, color: 'blue',image: './assets/images/socks_blue.jpg'}
        ])
        const description =ref ("greats socks")
        const onSale = ref(true)
        const cart = ref(0)
            function addToCart() {
                cart.value +=1
            }

            function updateImage(variantImage){
                image.value = variantImage
            }
            function toggleInStock() {
               inStock.value = !inStock.value;
            inventory.value = inStock.value ?  100 : 0;
            }
        return{
            product,
            image,
            description,
            link:"https://www.camt.cmu.ac.th/index.php/th/" ,
            inStock,
            inventory,
            details,
            variants,
            sizes,
            onSale,
            cart,
            addToCart,
            updateImage,
            toggleInStock
        }
    }

}).mount('#app')