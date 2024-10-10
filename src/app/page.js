"use client";
import React from "react";
import { useState } from "react";
const page = () => {
  const [data, setData] = useState({
     email: "",
     password:"",
     confPassword:"",
     firstName:"",
     lastName:"",
     phone:"",
     company:"",
     gender:"",
     country:"",
    });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
    console.log(data)
  }
  return (
    <div>
      <form class="max-w-md mx-auto my-14 border p-4 " onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleData}
            class="block py-2.5 px-0 w-full text-slate-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleData}
            class="block py-2.5 px-0 w-full  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="confPassword"
            name="confPassword"
            id="confPassword"
            class="block py-2.5 px-0 w-full  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="confPassword"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={data.firstName}
              onChange={handleData}
              class="block py-2.5 px-0 w-full  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="firstName"
              class="peer-focus:font-medium absolute text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={data.lastName}
              onChange={handleData}
              class="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="lastName"
              class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              // pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={handleData}
              class="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="company"
              id="company"
              value={data.company}
              onChange={handleData}
              class="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="company"
              class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company
            </label>
          </div>
          </div>
          <div>
            

<fieldset>
  <legend class="  text-white mb-2 ">Gender</legend>

  <div class="flex items-center mb-4">
    <input 
    id="country-option-1" 
    type="radio" 
    name={data.gender} 
    value="male"  
    onChange={handleData}  
    checked={data.gender==="male"}  
    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="country-option-1" class="block ms-2  text-sm font-medium text-white dark:text-gray-300">
      Male
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="country-option-2" 
    type="radio" name="female" 
    value={data.gender}
    onChange={handleData}  
    checked={data.gender==="female"} 
    class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="country-option-2" class="block ms-2 text-sm font-medium text-white dark:text-gray-300">
      Female
    </label>
  </div>
</fieldset>
</div>
<div>
  {/* Country Selection */}
  <div className="mb-5">
          <label 
            htmlFor="countries" 
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Select your country
          </label>
          <select
            id="countries"
            name="country" 
            value={data.country}
            onChange={handleData} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select a country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
</div>
        
        <button
          type="submit"
          class= "text-white  mt-2  f font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-2 hover:border-white hover:bg-white hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  
  );
};

export default page;