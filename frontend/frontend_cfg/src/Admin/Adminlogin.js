import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
const AdminLogin = () => {
  const onFormSubmit = (userObj) => {
    console.log(userObj);
    window.location.replace("/admin_home");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <h3 className="text-center">ADMIN LOGIN</h3>
              <div>
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("title", { required: true })}
                />
                {errors.title?.type === "required" && (
                  <p className="text-danger">*This is a required feild</p>
                )}
              </div>

              {/* {errors.type?.type === "required" && (
                <p className="text-danger">*This is a required feild</p>
              )} */}
              <div>
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  {...register("totalSignatures", { required: true })}
                />
                {errors.totalSignatures?.type === "required" && (
                  <p className="text-danger">*This is a required feild</p>
                )}
              </div>
              <br />
              <button type="submit" className="btn btn-danger w-25 text-center">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
