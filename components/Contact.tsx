import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
  return (
    <div className="flex flex-col md:flex-row md:text-left relative items-center justify-evenly h-screen mx-auto m-w-7xl px-10">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-200">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have just get what you need
        </h4>
        <span className="underline text-2xl text-center">Lets take</span>
        <div className="flex flex-col space-y-5">
          <div className="flex space-x-5 justify-center items-center">
            <PhoneIcon className="w-7 h-7 text-yellow-500 animate-pulse" />
            <p>+84 964903991</p>
          </div>
          <div className="flex space-x-5 justify-center items-center">
            <EnvelopeIcon className="w-7 h-7 text-yellow-500 animate-pulse" />
            <p>davidtanpro1998@gmail.com</p>
          </div>
          <div className="flex space-x-5 justify-center items-center">
            <MapPinIcon className="w-7 h-7 text-yellow-500 animate-pulse" />
            <p>Ho Chi Minh City</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-5 w-fill mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="inputContainer"
              type="text"
              placeholder="Name"
            />
            <input
              className="inputContainer"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className="inputContainer"
            type="phone"
            placeholder="Phone"
            {...register("phone")}
          />
          <textarea
            {...register("message")}
            className="inputContainer"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="border border-white w-full px-4 py-2 mx-auto font-semibold uppercase hover:bg-white hover:text-teal-500 transition duration-300 ease-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
