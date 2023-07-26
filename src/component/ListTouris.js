import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Edit from "./Edit";

export default function ListTouris() {
    const [listTour, setListTour] = useState([]);

    const loadedTour = () => {
        axios.get('http://localhost:3000/tuors')
            .then(response => {
                setListTour(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi gọi API:', error);
            });
    }

    useEffect(() => {
        // Gọi API để lấy dữ liệu
        loadedTour()
    }, []);

    const deleteTour = (id) => {
        axios.delete("http://localhost:3000/tuors/" + id)
            .then(r => {
                loadedTour()
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <h1>Lits Tour</h1>
            <Link to="/add">
                <button type="button" className="btn btn-outline-success"><b>+</b></button>
            </Link>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">edit</th>
                    <th scope="col">delete</th>
                </tr>
                </thead>
                <tbody>
                {listTour.map(item => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <Link to={`detail/${item.id}`}>
                            <td>{item.title}</td>
                        </Link>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>
                            <Link to={`/edit/${item.id}`}>
                                <button type="button" className="btn btn-outline-primary">Edit</button>
                            </Link>
                        </td>
                        <td>
                            <button onClick={() => {
                                deleteTour(item.id)
                            }} type="button" className="btn btn-outline-danger">Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
