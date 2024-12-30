import { LuSendHorizontal } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          toast.success("Message sent successfully!");
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send the message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative bg-white h-[1050px] md:h-[570px]" id="contact">
      <div className="container px-3 mx-auto bg-white rounded-2xl shadow-custom-black absolute top-[65%] md:top-[80%] lg:top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col md:flex-row p-3 gap-10 lg:p-[88px] pb-14 lg:gap-[88px]">
          <div className="lg:basis-5/12 basis-[45%]">
            <h3 className="text-[32px] uppercase font-anton text-transparent bg-gradient-to-r from-primary-600 to-primary-300 bg-clip-text">
              Let’s discuss
            </h3>
            <p className="text-lg font-workSans text-primary-500 leading-[24px] mt-4">
              Unlock the door to knowledge and expertise by subscribing to gain
              valuable insights, and take your skills
            </p>

            {/* Contact Info */}
            <div className="my-[35px]">
              <div className="inline-flex gap-[13px] lg:w-3/4 p-6 hover:bg-white hover:shadow-custom-black2 rounded group duration-300">
                {/* icon */}
                <div className="w-[54px] h-[54px] bg-primary-300/10 flex items-center justify-center rounded-sm group-hover:bg-gradient-to-t group-hover:from-primary-600 group-hover:to-primary-300 duration-300">
                  <GrLocation className="text-2xl text-primary-600 group-hover:text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-workSans text-customGray-400">
                    Address:
                  </p>
                  <p className="font-medium font-workSans text-customBlue">
                    Mirpur DOHS, Mirpur, Dhaka
                  </p>
                </div>
              </div>

              <div className="inline-flex gap-[13px] lg:w-3/4 p-6 hover:bg-white hover:shadow-custom-black2 rounded group duration-300">
                <div className="w-[54px] h-[54px] bg-primary-300/10 flex items-center justify-center rounded-sm group-hover:bg-gradient-to-t group-hover:from-primary-600 group-hover:to-primary-300 duration-300">
                  <MdOutlineMailOutline className="text-2xl text-primary-600 group-hover:text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-workSans text-customGray-400">
                    My Email:
                  </p>
                  <a
                    href="mailto:kahafil@goinnovior.com"
                    className="font-medium font-workSans text-customBlue"
                  >
                    kahafil@goinnovior.com
                  </a>
                </div>
              </div>

              <div className="inline-flex gap-[13px] lg:w-3/4 p-6 hover:bg-white hover:shadow-custom-black2 rounded group duration-300">
                <div className="w-[54px] h-[54px] bg-primary-300/10 flex items-center justify-center rounded-sm group-hover:bg-gradient-to-t group-hover:from-primary-600 group-hover:to-primary-300 duration-300">
                  <MdOutlineMailOutline className="text-2xl text-primary-600 group-hover:text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-workSans text-customGray-400">
                    Call me now:
                  </p>
                  <a
                    href="tel:+8801622992222"
                    className="font-medium font-workSans text-customBlue"
                  >
                    +880-1622-992222
                  </a>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href=""
                className="group w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-t hover:from-primary-600 hover:to-primary-300 to-bg rounded-sm transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-[18px] h-[18px] transition group-hover:fill-white"
                >
                  <defs>
                    <linearGradient
                      id="gradientId"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="0%" stopColor="rgb(8,199,156)" />
                      <stop offset="100%" stopColor="rgb(4,97,76)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"
                    fill="url(#gradientId)"
                    className="group-hover:fill-white"
                  ></path>
                </svg>
              </a>

              {/* Dribble */}
              <a
                href=""
                className="group w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-t hover:from-primary-600 hover:to-primary-300 to-bg rounded-sm transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-[18px] h-[18px] transition group-hover:fill-white"
                >
                  <defs>
                    <linearGradient
                      id="gradientId"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="0%" stopColor="rgb(8,199,156)" />
                      <stop offset="100%" stopColor="rgb(4,97,76)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 18.535156 6 20.832031 6.953125 22.59375 8.5 C 22.40625 8.761719 22.152344 9.078125 21.75 9.46875 C 20.894531 10.296875 19.527344 11.292969 17.4375 12.0625 C 16.023438 9.449219 14.636719 7.484375 13.71875 6.25 C 14.449219 6.082031 15.214844 6 16 6 Z M 11.75 6.9375 C 12.570313 8.011719 14.03125 10.003906 15.5 12.65625 C 11.433594 13.734375 7.703125 13.871094 6.21875 13.875 C 6.882813 10.785156 8.960938 8.242188 11.75 6.9375 Z M 23.96875 9.96875 C 25.1875 11.582031 25.945313 13.578125 26 15.75 C 25.109375 15.550781 23.796875 15.355469 22.09375 15.34375 C 21.207031 15.339844 20.203125 15.402344 19.125 15.53125 C 18.875 14.960938 18.605469 14.410156 18.34375 13.875 C 20.585938 13.015625 22.113281 11.882813 23.125 10.90625 C 23.46875 10.570313 23.738281 10.261719 23.96875 9.96875 Z M 16.40625 14.46875 C 16.636719 14.933594 16.871094 15.410156 17.09375 15.90625 C 12.820313 17.089844 9.75 20.714844 8.4375 22.53125 C 6.925781 20.78125 6 18.5 6 16 C 6 15.957031 6 15.917969 6 15.875 C 7.351563 15.890625 11.648438 15.796875 16.40625 14.46875 Z M 22.09375 17.3125 C 23.878906 17.3125 25.113281 17.5625 25.84375 17.75 C 25.378906 20.414063 23.875 22.699219 21.75 24.1875 C 21.351563 21.796875 20.695313 19.523438 19.90625 17.4375 C 20.695313 17.359375 21.441406 17.3125 22.09375 17.3125 Z M 17.875 17.78125 C 18.773438 20.0625 19.527344 22.566406 19.90625 25.21875 C 18.710938 25.722656 17.382813 26 16 26 C 13.707031 26 11.589844 25.230469 9.90625 23.9375 C 10.933594 22.53125 13.953125 18.789063 17.875 17.78125 Z"
                    fill="url(#gradientId)"
                    className="group-hover:fill-white"
                  ></path>
                </svg>
              </a>

              {/* Behance */}
              <a
                href=""
                className="group w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-t hover:from-primary-600 hover:to-primary-300 to-bg rounded-sm transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-[18px] h-[18px] transition group-hover:fill-white"
                >
                  <defs>
                    <linearGradient
                      id="gradientId"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="0%" stopColor="rgb(8,199,156)" />
                      <stop offset="100%" stopColor="rgb(4,97,76)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 1 6.75 L 1 25.25 L 9.9375 25.25 C 10.765625 25.25 16.46875 25.082031 16.46875 19.875 C 16.46875 16.621094 14.230469 15.515625 13.09375 15.1875 C 13.929688 14.792969 15.59375 13.855469 15.59375 11.34375 C 15.59375 9.945313 15.394531 6.75 9.6875 6.75 Z M 21.375 8.46875 L 21.375 10.15625 L 28.28125 10.15625 L 28.28125 8.46875 Z M 5.0625 9.90625 L 8.875 9.90625 C 9.234375 9.90625 11.65625 9.714844 11.65625 12.03125 C 11.65625 14.011719 9.90625 14.21875 9.1875 14.21875 L 5.0625 14.21875 Z M 25 11.6875 C 19.777344 11.6875 18.6875 16.222656 18.6875 18.1875 C 18.6875 24.019531 23.46875 24.6875 25 24.6875 C 29.128906 24.6875 30.300781 22.015625 30.78125 20.53125 L 27.78125 20.53125 C 27.664063 20.914063 26.789063 22.15625 25.125 22.15625 C 22.335938 22.15625 22.09375 19.976563 22.09375 19 L 30.96875 19 C 31.148438 15.625 29.671875 11.6875 25 11.6875 Z M 24.90625 14.21875 C 25.738281 14.21875 26.410156 14.460938 26.8125 14.90625 C 27.214844 15.355469 27.511719 16.011719 27.59375 16.875 L 22.09375 16.875 C 22.109375 16.636719 22.164063 16.363281 22.25 16.0625 C 22.335938 15.753906 22.46875 15.460938 22.6875 15.1875 C 22.90625 14.917969 23.210938 14.683594 23.5625 14.5 C 23.921875 14.3125 24.367188 14.21875 24.90625 14.21875 Z M 5.0625 17 L 9.46875 17 C 10.34375 17 12.40625 17.136719 12.40625 19.65625 C 12.40625 22.097656 9.808594 22.09375 9.40625 22.09375 L 5.0625 22.09375 Z"
                    fill="url(#gradientId)"
                    className="group-hover:fill-white"
                  ></path>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href=""
                className="group w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-t hover:from-primary-600 hover:to-primary-300 to-bg rounded-sm transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-[18px] h-[18px] transition group-hover:fill-white"
                >
                  <defs>
                    <linearGradient
                      id="gradientId"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="0%" stopColor="rgb(8,199,156)" />
                      <stop offset="100%" stopColor="rgb(4,97,76)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"
                    fill="url(#gradientId)"
                    className="group-hover:fill-white"
                  ></path>
                </svg>
              </a>

              {/* Linkedin */}
              <a
                href=""
                className="group w-[48px] h-[48px] flex items-center justify-center bg-gradient-to-t hover:from-primary-600 hover:to-primary-300 to-bg rounded-sm transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-[18px] h-[18px] transition group-hover:fill-white"
                >
                  <defs>
                    <linearGradient
                      id="gradientId"
                      gradientTransform="rotate(90)"
                    >
                      <stop offset="0%" stopColor="rgb(8,199,156)" />
                      <stop offset="100%" stopColor="rgb(4,97,76)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"
                    fill="url(#gradientId)"
                    className="group-hover:fill-white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:basis-7/12 basis-[55%]">
            <p className="text-lg font-workSans text-primary-500 leading-[24px] pt-10">
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alte.
            </p>
            <form className="mt-[50px]" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    {...register("name", {
                      required: "The name field is required",
                    })}
                    className={`pb-3 border-b-2 w-full border-customGray-300 focus:outline-none placeholder:text-lg placeholder:font-workSans placeholder:leading-[24px] ${
                      errors.name
                        ? "border-red-500 placeholder:text-red-400"
                        : "focus:border-primary-600 focus:placeholder:text-primary-300 placeholder:text-customGray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    {...register("email", {
                      required: "The email field is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email format",
                      },
                    })}
                    className={`pb-3 border-b-2 w-full border-customGray-300 focus:outline-none placeholder:text-lg placeholder:font-workSans placeholder:leading-[24px] ${
                      errors.email
                        ? "border-red-500 placeholder:text-red-400"
                        : "focus:border-primary-600 focus:placeholder:text-primary-300 placeholder:text-customGray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <input
                    type="text"
                    placeholder="Location"
                    {...register("location")}
                    className="pb-3 border-b-2 w-full border-customGray-300 focus:outline-none placeholder:text-lg placeholder:font-workSans placeholder:leading-[24px] focus:border-primary-600 focus:placeholder:text-primary-300 placeholder:text-customGray-200"
                  />
                </div>

                {/* Budget and Subject */}
                <div className="flex items-center justify-between gap-6">
                  {/* Budget */}
                  <div className="basis-2/5">
                    <input
                      type="number"
                      placeholder="Budget*"
                      min={1}
                      {...register("budget", {
                        required: "The budget field is required",
                        valueAsNumber: true,
                      })}
                      className={`pb-3 w-full border-b-2 border-customGray-300 focus:outline-none placeholder:text-lg placeholder:font-workSans placeholder:leading-[24px] ${
                        errors.budget
                          ? "border-red-500 placeholder:text-red-400"
                          : "focus:border-primary-600 focus:placeholder:text-primary-300 placeholder:text-customGray-200"
                      }`}
                    />
                    {errors.budget && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="basis-3/5">
                    <input
                      type="text"
                      placeholder="Subject*"
                      {...register("subject", {
                        required: "The subject field is required",
                      })}
                      className={`pb-3 w-full border-b-2 border-customGray-300 focus:outline-none placeholder:text-lg placeholder:font-workSans placeholder:leading-[24px] ${
                        errors.subject
                          ? "border-red-500 placeholder:text-red-400"
                          : "focus:border-primary-600 focus:placeholder:text-primary-300 placeholder:text-customGray-200"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <input
                    type="text"
                    placeholder="Message*"
                    {...register("message", {
                      required: "The message field is required",
                    })}
                    className={`pb-3 border-b-2 w-full border-customGray-300 focus:outline-none placeholder:text-lg placeholder:font-workSans placeholder:leading-[24px] ${
                      errors.message
                        ? "border-red-500 placeholder:text-red-400"
                        : "focus:border-primary-600 focus:placeholder:text-primary-300 placeholder:text-customGray-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className={`py-3 leading-[24px] px-5 text-white rounded-md bg-gradient-to-t from-primary-600 to-primary-300  mt-[50px] inline-flex items-center gap-3 font-workSans font-semibold duration-300 ease-in-out transform hover:scale-105 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary-600 to-primary-300"
                } text-white font-medium transition`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    Submit <LuSendHorizontal className="text-2xl" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* React-Toastify Container */}
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default Contact;
