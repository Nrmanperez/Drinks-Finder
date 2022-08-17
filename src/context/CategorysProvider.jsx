import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const CategorysContext = createContext()

const CategorysProvider = ({children}) => {
    const [categorys, setCategorys ] = useState([])

    const getCategorys = async () => {
        try {
            const url = import.meta.env.VITE_API_CATEGORYS_URL

            const { data } = await axios(url)
            setCategorys(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCategorys()
    }, [])

    return (
        <CategorysContext.Provider
            value={{
                categorys
            }}
        >
            {children}
        </CategorysContext.Provider>
    )
}

export {
    CategorysProvider
}

export default CategorysContext