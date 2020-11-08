import React from 'react'
import { Container } from '@material-ui/core'
import CarsGrid from '../cars/CarsGrid'
import { useSelector } from 'react-redux'

const Content = () => {
    return (
        <Container>
            <CarsGrid />
        </Container>
    )
}

export default Content
