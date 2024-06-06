"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleData = (e) => {
    const formEle = document.querySelector(".form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbyBch8VSDbJ_HBNb6DTc69EScvfS27swXny5XXzZNtChOk2l1DgJ4HeJD98J590wc9FGw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (data, e) => {
    handleData(e);
    reset();
    alert("Your Form is submitted ")
  };

  return (

    <div id='contact' className='max-w-7xl mx-auto shadow-lg shadow-indigo-400 my-8 rounded-lg' >
      <div className="font-mono  text-slate-900 p-5 text-3xl  flex justify-center items-center">Contact Us</div>
      <div className=" flex items-center justify-center">
      
      <form
        className="form  flex justify-center items-center md:ml-52 ml-10 opacity-80 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form    shadow-xl grid-rows-4  opacity-80' >
        <input
          className="border border-solid shadow-xl shadow-indigo-100  p-5 m-3 w-1/3  rounded-lg items-center  "
          type="text"
          name="firstName"
          placeholder="Your Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />

        <input
          className="border border-solid shadow-xl shadow-indigo-100 p-5 m-3 w-1/3 rounded-lg items-center "
          type="text"
          name="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="border border-solid shadow-xl shadow-indigo-100  p-5 m-3 w-1/3 rounded-lg items-center "
          type="tel"
          name="mobileNumber"
          placeholder="Mobile number"
          {...register("Number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <input
          {...register("Year")}
          className="border border-solid shadow-xl shadow-indigo-100  p-5 m-3 w-1/3 rounded-lg items-center "
          name="Age"
          placeholder="Enter your Age"
          {...register("Year", {
            required: true,
            minLength: 1,
            maxLength: 6,
          })}
          
        />
        <input
          className="border border-solid shadow-xl shadow-indigo-100  p-5 m-3 w-1/3 rounded-lg items-center "
          type="text"
          placeholder="State"
          {...register("Branch", { required: true })}
        />
        <input
          className="border border-solid shadow-xl shadow-indigo-100  p-5 m-3 w-1/3 rounded-lg items-center "
          type="text"
          placeholder="City"
          {...register("Hostel", { required: true })}
        />
        <input
          className="border border-solid shadow-xl shadow-indigo-100  p-5 m-3 w-1/3 rounded-lg items-center "
          type="text"
          placeholder="Connected To"
          {...register("ConnectedTo", { required: true })}
        />
        <input
          type="text"
          className="border border-solid shadow-xl shadow-indigo-100  p-5 m-3 w-1/3 rounded-lg items-center "
          placeholder="Message"
          {...register("Message", {})}
        />

      
        <input className="border shadow-xl border-solid p-5 m-3 w-1/3 cursor-pointer font-bold text-xl  rounded-lg items-center bg-gradient-to-br from bg-indigo-300  "   type="submit"  />
        </div>
      </form>
      </div>
    </div>
  );
}

export default Form