export const load = async () => {
    const  title = "List of avaible products"
    const response = await fetch("http://localhost:4000/products")
    const products = await response.json()
    return {
        title,
        products
    }
}