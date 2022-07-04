
import React, { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { DataContext } from "../App";
import Anh2 from "../img/anh2.jpg"


const View = () => {


  const data = React.useContext(DataContext);
  console.log(data)


  return (
    < >

      <div className=" bg-lime-200 mt-20 nav-bar mt-36 ml-96 mr-96 p-5">
        <Link to="/Lists" className="text-center bg-sky-800 rounded-lg  px-2 mbs"> <button>Back list</button></Link>

        <h1 className="text-center border-black bg-yellow-800  ">
          Thông tin chi tiết
        </h1>
        <div className="bg-stone-400 border-black pt-2.5">
         <div className="flex p-5"> <p className="w-12 h-12 bg-lime-200 rounded-full"></p>
          <div className="pl-2.5">
         <h1>Tên Sinh viên: {data.state.name} </h1>
         <h1>Phone : {data.state.phone} </h1>
         </div>
         </div>
         <div className="p-5 ">
         <h1>Mã Sinh viên: {data.state.codes}</h1>

<h1>Lớp:{data.state.classs}</h1>
<h1>email : {data.state.email} </h1>
<h1>Địa chỉ : {data.state.contact} </h1>

         </div>
        </div>

      </div>

    </>
  )

}
export default View