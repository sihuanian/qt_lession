import React, { useEffect, useCallback } from 'react'
// import axios from 'axios'
import useAxios from './useAxios'
function Search() {
	const [data, err, loading, request] = useAxios({
		url: 'http://rap2api.taobao.org/app/mock/240109/redux/todolist',
		method: 'GET'
	})
	const func = useCallback(request, [])
	useEffect(() => {
		setTimeout(() => {
			func()
		}, 3000);
	}, [func])
/* 		setTimeout(() => {
			request()
	}, 3000); */
	/* const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)
	const [err, setErr] = useState(null)
	useEffect(() => {
		axios
			.get('http://rap2api.taobao.org/app/mock/240109/redux/todolist')
			.then(res => {
				setList(res.data.list)
				setLoading(false)
			})
			.catch(err => {
				setErr(err)
				setLoading(false)
			})
	}) */
	if (loading)
		return (
			<div>
				loading...<button onClick={() => request()}>点击</button>
			</div>
		)
	return (
		<div>
			{err
				? JSON.stringify(err)
				: data.list &&
				  data.list.map((el, index) => {
						return <li key={index}>{el}</li>
				  })}
		</div>
	)
}

export default Search
