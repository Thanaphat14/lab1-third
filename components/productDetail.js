const productDetail = {
    template: 
    /*html*/ 
    `
    <h2>Detail</h2>
    <p>{{detail}}</p>
    `,
    props:{
        detail: String
    },
    setup(props) {   
        
        const detail = ref('50% cotton30% wool20% polyester')

    return {
        detail
    }
}

}