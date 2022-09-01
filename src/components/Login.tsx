import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import '../style/style.css';
import {LoginType} from "../type/TypeLogin";
import {useUser} from '../context/LoginContext'; 
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate() ;

  const {dataUser, setDataUser} = useUser();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>();
  const [getData, setData] = useState("");

  const onSubmit = (getData:any) => {
    setData(getData);
    setDataUser(getData);
    console.log(getData.email);
    console.log(getData.password);
    navigate('Home');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Usuario</label>
          <input type="email"
           {...register("email", { required: true })}/>
          {errors.email && <span>This field is required</span>}
        </div>

        <div>
          <label>Contrasea</label>
          <input type="password" {...register("password", { required: true })}/>
          {errors.password && <span>This field is required</span>}
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
        
      </form>
    </div>
  );
}
export default Login;


