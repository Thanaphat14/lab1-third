const{ createApp, ref} = Vue

createApp({
    setup(){
        const product = ref ('Boots')
        const image = ref ('./assets/images/socks_green.jpg')
        const description =ref ("greats socks")
        return{
            product,
            image,
            description,
            link:"https://www.camt.cmu.ac.th/index.php/th/"
        }
    }

}).mount('#app')