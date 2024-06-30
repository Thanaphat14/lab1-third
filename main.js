const{ createApp, ref , computed} = Vue

createApp({
    setup(){
        const product = ref ('Boots')
        const brand =ref ('SE 331')
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
            {id: 2234, color: 'green',image: './assets/images/socks_green.jpg',quantity:50,onSale:true},
            {id: 2235, color: 'blue',image: './assets/images/socks_blue.jpg', quantity:0,onSale:false}
        ])
        const selectedVariant =ref(0)
        function updateVariant(index){
            selectedVariant.value = index;
        }
        const image = computed(() =>{
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() =>{
        return variants.value[selectedVariant.value].quantity
        })
        const description =ref ("greats socks")
        const onSale = ref(true)
        const cart = ref(0)
            function addToCart() {
                cart.value +=1
            }
            const title = computed(() => {
                if((variants.value[selectedVariant.value].onSale)){
                  return brand.value + ' ' +product.value + ' is on Sale'
                } else {
                  return brand.value + ' ' +product.value
                }
              })

            const onSaleMessage = computed(() => {
                return onSale.value ? `${brand.value} ${product.value} is on sale` : '';
            });

            function updateImage(variantImage){
                image.value = variantImage
            }
            function toggleInStock() {
                inStock.value = !inStock.value;
                inventory.value = inStock.value ?  0 : 100;
                const variant = variants.value[selectedVariant.value];
                variant.quantity = variant.quantity > 0 ? 0 : 100;
            }
        return{
            title,
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
            selectedVariant,
            updateVariant,
            addToCart,
            updateImage,
            toggleInStock,
            onSaleMessage
        }
    }

}).mount('#app')