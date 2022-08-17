import { useContext } from 'react'
import CategorysContext from '../context/CategorysProvider'

const useCategorys = () => {
    return useContext(CategorysContext)
}

export default useCategorys