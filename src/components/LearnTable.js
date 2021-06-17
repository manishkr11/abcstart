import React, {useState, useEffect} from 'react'


function LearnTable() {
    const [items, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setItem(data)
            setLoading(false)
        }
        setTimeout(()=>{
            getItems()
        },1000)
            })

    const getTable = (items) => {
       return items.map((item, i) => {
            return(
                    <tbody key={i}>
                        <tr>
                            <td>{item.name}<span className="badge badge-light">4</span></td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                        </tr>
                    </tbody>
            )
        })
    }


    return (
        <div>
                {loading ?<div className="spinner-border text-warning"></div>: 
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    {getTable(items, loading)}
                </table>}
        </div>
    )
}

export default LearnTable
