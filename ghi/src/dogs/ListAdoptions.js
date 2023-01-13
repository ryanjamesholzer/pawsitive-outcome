import { React, useState, useEffect, useCallback } from 'react'
import { useAuthContext } from '../Accounts/useToken'


function ListAdoptions() {
    const {token} = useAuthContext()
    const [adoptions, setAdoption] = useState([])


    useEffect( () => {
        const adoptionsURL = `${process.env.REACT_APP_PAWSITIVE_SERVICE_API_HOST}/api/dogs`
        fetchConfig = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        if (token !== null) {
            fetch(adoptionsURL, fetchConfig)
                .then(res => {
                    return res.json()
                })
                .then(result => {
                    setAdoption(data.adoptions)
                })
        }
    }, [token])
}
export default ListAdoptions