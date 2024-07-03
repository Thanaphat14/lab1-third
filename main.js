const{ createApp, ref , computed} = Vue

const app = createApp({
    setup(){
        
        
       

        const cart = ref([])
    
            

        const premium = ref(false)


        function updateCart(id){
            const productInCart = cart.value.find(product => product.id === id)
            if (productInCart) {
                productInCart.quantity++
            } else {
                cart.value.push({ id, quantity: 1 })
            }
            }
            function removeFromCart(id) {
                const index = cart.value.findIndex(product => product.id === id);
                if (index !== -1) {
                    const product = cart.value[index];
                    if (product.quantity > 1) {
                        product.quantity--;
                    } else {
                        cart.value.splice(index, 1);
                    }
                }
            }
            return{
                cart,
                premium,
                updateCart,
                removeFromCart
             
                
            
                
                
            }
        
    }

})
app.component('product-display',productDisplay)
app.component('product-detail', productDetail)
app.mount('#app')