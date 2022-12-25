import { useContext, useState } from "react";
import { createContext } from "react";
import { ProductItems } from "../assets/moduels/Productmoduels";


interface ProductProviderType {
    children?: any
}

export interface ProductContextType {
    product: ProductItems
    products : ProductItems[]
    featured: ProductItems[]
    cheapdeals: ProductItems[]
    expensivedeals: ProductItems[]
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeatured: (take?: number) => void
    getCheapdeals: (take?: number) => void
    getExpensivedeals: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

    const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const empty_products: ProductItems = { tag: '',  articleNumber : '' , name: '', description: '' , category: '' , price: 0 , imageName: ''}

    const [product, setProduct] = useState<ProductItems>(empty_products)
    const [products, setProducts] = useState<ProductItems[]>([])
    const [featured, setFeatured] = useState<ProductItems[]>([])
    const [cheapdeals, setCheapdeals] = useState<ProductItems[]>([])
    const [expensivedeals, setExpensivedeals] = useState<ProductItems[]>([])

    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(baseUrl + `/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }
    const getCheapdeals = async (take: number = 0) => {

        let url = `${baseUrl}/Cheapdeals`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setCheapdeals(await res.json())
    }

    const getExpensivedeals = async (take: number = 0) => {
        let url = `${baseUrl}/Expensivedeals`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setExpensivedeals(await res.json())
    }
    

    return <ProductContext.Provider value={{product, products, featured, cheapdeals, expensivedeals, get, getAll, getFeatured, getCheapdeals, getExpensivedeals }}>
        {children}
    </ProductContext.Provider>
}


export default ProductProvider