import React from "react";
import { useForm } from "react-hook-form";
import Field from "./Field";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit Form Function

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <Field label="Email">
          <input
            {...register("email", { required: "Email Address is required" })}
            className={`auth-input ${!!errors.email ? "border-red-500" : "border-gray-200"}`}
            name="email"
            type="email"
            id="email"
          />
        </Field>
      </form>
    </>
  );
};

export default LoginForm;
