import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import AdminHeader from "../Header/AdminHeader"
import AdminCampaign from "./AdminCampaign";
import Campaign from "./Campaign";
const API = axios.create({ baseURL: 'http://localhost:3000' })

function Admincampaignlist() {
  const [enddate, setEnddate] = useState();
  const [data,setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = async(userObj) => {
    console.log(userObj);
    setData(userObj);
    const response = await API.post("/campaign/createCampaign",userObj);
    console.log(response);
    alert("Campaign has been created")
  };
  return (
    <div>
      <AdminHeader/>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <h3 className="text-center" style={{fontSize: '38px', marginTop: '20px', fontWeight:'700', color:'#f76c6c', marginBottom: '25px'}}>Add Campaign</h3>
              <div>
                <label>Name of Campaign</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("title", { required: true })}
                />
                {errors.title?.type === "required" && (
                  <p className="text-danger">*This is a required feild</p>
                )}
              </div>
              <div>
                <label>Description</label>
                <textarea
                  className="form-control"
                  {...register("desc", { required: true })}
                ></textarea>
                {errors.desc?.type === "required" && (
                  <p className="text-danger">*This is a required feild</p>
                )}
              </div>
              <div>
                <label>Start Date</label>
                <input
                  className="form-control"
                  type="date"
                  {...register("startDate", { required: true })}
                  onChange={(e) => {
                    setEnddate(e.target.value);
                  }}
                />
                {errors.startDate?.type === "required" && (
                  <p className="text-danger">*This is a required feild</p>
                )}
              </div>
              <div>
                <label>End Date</label>
                <input
                  className="form-control"
                  type="date"
                  {...register("endDate", { required: true, min: enddate })}
                />
                {errors.endDate?.type === "required" && (
                  <p className="text-danger">*This is a required feild</p>
                )}
                {errors.endDate?.type === "min" && (
                  <p className="text-danger">
                    *End Date must me after the Start Date
                  </p>
                )}
              </div>
              <label>Type of Campaign </label>
              <select
                className="form-control"
                {...register("type", { required: true })}
              >
                <option className="form-control" value="social">
                  Social
                </option>
                <option className="form-control" value="political">
                  Political
                </option>
                <option className="form-control" value="natural">
                  Natural
                </option>
                <option className="form-control" value="economical">
                  Economical
                </option>
                <option className="form-control" value="cultural">
                  Cultural
                </option>
              </select>
              {errors.type?.type === "required" && (
                <p className="text-danger">*This is a required feild</p>
              )}
              <div>
                <label>Total Signatures</label>
                <input
                  className="form-control"
                  type="number"
                  {...register("totalSignatures", { required: true })}
                />
                {errors.totalSignatures?.type === "required" && (
                  <p className="text-danger">*This is a required feild</p>
                )}
              </div>
              <button type="submit" className="btn btn-primary w-25">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr/>
      <h1 style={{fontSize: '44px', marginTop: '25px', fontWeight:'800', color:'#53900f' }}>List of Campaigns Posted</h1>
      <Campaign/>
    </div>
  );
}

export default Admincampaignlist;