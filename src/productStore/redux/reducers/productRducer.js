
const initState = {products: [
    {
    id:1,
    name:'Toster',
    price:100,
    },
    {
        id:2,
        name:'Bike',
        price:300,
        },
        {
            id:3,
            name:'NoteBook',
            price:700,
            },
            
],
cart:[]
}

const productReducer = (state=initState,action) => {

    return state
}
export default productReducer