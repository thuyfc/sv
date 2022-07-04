import React, { useState, useEffect } from "react";
import { useNavigate, usePrams } from 'react-router-dom'
import "./AddEdit.css"
import Students from "../services/Studenst";
import { DataContext } from "../App";

function AddEdit({id, setStudentId }) {
    const navigate = useNavigate();
    const initialState = {
        name: "",
        codes: "",
        classs: "",
        email: "",
        phone: "",
        contact: "",

    };

    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: "" });
    const [state, setState] = useState(initialState);
    const { name, codes, email, contact, phone, classs } = state;
    const [isUpdate, setisUpdate] = useState(false)
    const data = React.useContext(DataContext);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    // useEffect(() => {
    //     pathname.split("/")[1] === "update" ? setisUpdate(true) : setisUpdate(false)
    // }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !codes || !classs || !email || !contact) {
            // setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        } else {
            Students.addStudents(state);
            setTimeout(() => navigate("/lists"), 500)
        }
        // try {
        //     if (id !== undefined && id !== "") {
        //       await Students.updateStudents(id, state);
        //       setStudentId("");
        //       setMessage({ error: false, msg: "Updated successfully!" });
        //     } else {
        //       await Students.addStudents(Students);
        //       setMessage({ error: false, msg: "New Book added successfully!" });
        //     }
        //   } catch (err) {
        //     setMessage({ error: true, msg: err.message });
        //   }
      
        //     Students.addStudents(state);
           
        };
    //     const editHandler = async () => {
    //         setMessage("");
    //         try {
    //           const docSnap = await Students.getStudent(id);
    //           console.log("the record is :", docSnap.data());
    //           setState(docSnap.data().state);
              
    //         } catch (err) {
    //           setMessage({ error: true, msg: err.message });
    //         }
    //       };
        
    //       useEffect(() => {
    //         console.log("The id here is : ", id);
    //         if (id !== undefined && id !== "") {
    //           editHandler();
    //         }
    //       }, [id]);
    

    // const pathname = window.location.pathname
    // console.log(pathname.split("/")[1] === "update")

    /// lấy id,=> lấy dữ liệu của id đấy
    /// fill dữ liệu vào form sửa
    /// lấy từ input 
    /// người dùng ko sửa input dùng dữ liểu ban đầu
    /// người dùng sửa input đấy thì lấy dữ liệu vừa sửa
    // chạy hàm update(id, dataInput)

    return (
        <div style={{ marginTop: "30px" }} >

            <form

                className="bg-slate-50"
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "450px",
                    textAlign: "center",
                }}
                onSubmit={handleSubmit}>
                <h1 className="text-black text-3xl">Thêm Sinh Viên  </h1>

                <label htmlFor="codes">Mã Sinh Viên </label>
                <input className="border-current inputcss"
                    type="text"
                    id="codes"
                    name="codes"
                    placeholder="MSV..."
                    required=""
                    value={codes}
                    onChange={handleInputChange} />
                <label htmlFor="name">Tên sinh viên </label>
                <input className="border-current inputcss"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tên..."
                    required=""
                    value={name}
                    onChange={handleInputChange} />
                <label htmlFor="classs">Lớp </label>
                <input
                    type="text"
                    id="classs"
                    name="classs"
                    placeholder="Lớp..."
                    required=""
                    value={classs}
                    onChange={handleInputChange} />
                <label htmlFpr="email">Email </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email..."
                    required=""
                    value={email}
                    onChange={handleInputChange} />
                <label htmlFor="contact">Phone </label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Phone..."
                    required=""
                    value={phone}
                    onChange={handleInputChange} />


                <label htmlFor="contact">Địa chỉ </label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Hà nội..."
                    required=""
                    value={contact}
                    onChange={handleInputChange} />


                <input type="submit" value="Save" />
            </form>
        </div>


    )

}
export default AddEdit