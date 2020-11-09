import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import loaded from '../../actions/loaded'
import set_items from '../../actions/set_items'
import Loading from '../ui/Loading'
import CarDetail from './CarDetail'

const CarsGrid = () => {
    const items = useSelector(state => state.items)
    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        // const url = 'http://127.0.0.1:4000/api/cars/'
        const url = 'https://6d7042ceaea7.ngrok.io/api/cars/'
        const fetchItems = async () => {
            const result = await axios(url)
            console.log(result.data)
            dispatch(set_items(result.data))
            dispatch(loaded())
        }
        fetchItems()
    }, [])

    return isLoading ? ( <Loading /> ) : (
        <div>
            {items.map(
                item => (
                    <CarDetail item={item} key={item.id}/>
                )
            )}
        </div>
    )
}

export default CarsGrid
