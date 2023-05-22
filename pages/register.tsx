import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/common/select";
import { useFormik } from "formik";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import { useState } from "react";
import Dropdown from "../src/components/common/dropdown";
import Button from "../src/components/common/form/button";
import InputField from "../src/components/common/form/input-field";
import PasswordField from "../src/components/common/form/password-field";
import styles from "../src/styles/login.module.scss";
import { getFieldvalues } from "@/src/utils/functions";
import ErrorLabel from "@/src/components/common/error-label";

export default function RegisterPage() {
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const [completed, setCompleted] = useState(false);

  const form = useFormik({
    initialValues: {
      name: "",
      reg_no: "",
      facaulty: undefined,
      department: undefined,
      email: "",
      password: "",
    },
    validationSchema: undefined,
    onSubmit: async (values) => {
      console.log(values);
      // return/\
      const url = "http://127.0.0.1:8080/user/signup";
      const response = await window.fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setCompleted(true);
      } else {
        setErrorText("Invalid credentials");
      }
    },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" lg:block hidden">
        <Image
          src="/imgs/logo.png"
          alt="lendsqr Logo"
          width={175}
          height={36}
        />
        <Image
          className="pt-[140px]"
          src="/imgs/illustration.png"
          alt="illustration"
          width={600}
          height={340}
        />
      </div>
      {!completed && (
        <div className=" max-w-[450px] lg:max-w-none m-auto lg:min-w-[450px] justify-self-center h-fit self-center">
          <ErrorLabel perm error={errorText} />
          <h1 className=" text-primary-400 text-4xl lg:text-[40px] font-bold">
            Register
          </h1>
          <p className="text-secondary-100 my-1 lg:mt-2.5">
            Enter details to register.
          </p>
          <form onSubmit={form.handleSubmit}>
            <InputField label="Fullname" {...getFieldvalues("name", form)} />
            <InputField label="Regno" {...getFieldvalues("reg_no", form)} />
            <InputField label="Email" {...getFieldvalues("email", form)} />
            <Select {...getFieldvalues("facaulty", form)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select facaulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                  <SelectItem value="ART">ART</SelectItem>
                  <SelectItem value="ENGINEERING">ENGINEERING</SelectItem>
                  <SelectItem value="MEDICINE">MEDICINE</SelectItem>
                  <SelectItem value="EDUCATION">EDUCATION</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select {...getFieldvalues("department", form)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select deparment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="COMPUTER SCIENCE">
                    COMPUTER SCEINCE
                  </SelectItem>
                  <SelectItem value="BIOLOGY">BIOLOGY</SelectItem>
                  <SelectItem value="MICRO BIOLOGY">MICRO BIOLOGY</SelectItem>
                  <SelectItem value="STATISTICS">STATISTICS</SelectItem>
                  <SelectItem value="MATHEMATICS">MATHEMATICS</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* <InputField label="Email" name="email" /> */}
            <PasswordField
              label="Password"
              {...getFieldvalues("password", form)}
            />

            <Button
              className="mt-7.5"
              color="primary"
              variant="filled"
              type="submit"
            >
              REGISTER
            </Button>
          </form>
        </div>
      )}

      {completed && (
        <div className="mt-40 max-w-[400px]">
          <h1 className=" text-primary-400 text-4xl lg:text-[40px] font-bold">
            Registeration Complete
          </h1>
          <p className="text-secondary-100 my-1 lg:mt-2.5">
            Login to continue
          </p>
          <Button
              className="mt-7.5"
              color="primary"
              variant="filled"
              type="submit"
              onClick={()=> router.push("/login")}
            >
              LOGIN
            </Button>
        </div>
      )}
    </div>
  );
}
