import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import {Link} from "react-router-dom";
export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState({
        id:"",
        title: "",
        price: "",
        description: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:3000/tuors/${id}`).then((response) => {
            setTour(response.data);
        });
    }, [id]);
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTour({ ...tour, [name]: value });
    };
    return (
        <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1>detail tour {tour.title}</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="title"
                value={tour.id}
                onChange={onChangeHandled}
                disabled
            />
            <br />
            <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="title"
                value={tour.title}
                onChange={onChangeHandled}
                disabled
            />
            <br />
            <input
                type="text"
                className="form-control"
                placeholder="Enter Price"
                name="price"
                value={tour.price}
                onChange={onChangeHandled}
                disabled
            />
            <br />
            <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                name="description"
                value={tour.description}
                onChange={onChangeHandled}
                disabled
            />
            <br />
            <Link to="/">
                <button type="button" className="btn btn-outline-info">back</button>
            </Link>
        </div>
    );
}