const productDisplay = {
    template:
    /*html*/
    `
    <div class="cart">Cart({{ cart }})</div>
    <div class="product-display">
    <div class="product-container">
                <div class="product-image">
                    <img :src="image">
                </div>
            </div>
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="onSaleMessage">{{ onSaleMessage }}</p>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <button class="button" @click="toggleInStock">Toggle In Stock Status</button>
            <ul>
                <li v-for="detail in details" :key="detail">{{ detail }}</li>
            </ul>
            <ul>
                <li v-for="size in sizes" :key="size">{{ size }}</li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                class="color-circle" :style="{ backgroundColor: variant.color }">
            </div>
            <button class="button" :disabled="!inStock" @click="addToCart" 
            :class="{ disabledButton: !inStock }">Add To Cart</button>
            <p v-if="inventory > 1">On sale</p>
            <h2>{{ description }}</h2>
            
        </div>
    </div>
    `, 
    props:{
        premium: Boolean
    },
    setup(props) {   
        const shipping = computed(()=>{
        if (props.premium){
            return 'Free'
        } else {
            return 30
        }
    })

        
        
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
        const cart = ref(0)
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
            cart,
            sizes,
            onSale,
            selectedVariant,
            updateVariant,
            addToCart,
            updateImage,
            toggleInStock,
            onSaleMessage,
            shipping,
        
            
            
            
            
           
        }
    }
}