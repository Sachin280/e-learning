import React from 'react'
import Header from '../navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
