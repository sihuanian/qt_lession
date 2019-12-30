import { useState } from 'react'
import axios from 'axios'

function useAxios(config) {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [err, setErr] = useState(null)

	function request() {
		axios(config)
			.then(res => {
				setData(res.data)
				setLoading(false)
			})
			.catch(err => {
				setErr(err)
				setLoading(false)
			})
	}

/* 	useEffect(() => {
		axios(config)
			.then(res => {
				setData(res.data)
				setLoading(false)
			})
			.catch(err => {
				setErr(err)
				setLoading(false)
			})
	}, []) */

	return [data, err, loading, request]
}

export default useAxios
