import { Label } from "@/src/components/common/label";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import Button from "../src/components/common/form/button";
import InputField from "../src/components/common/form/input-field";
import PasswordField from "../src/components/common/form/password-field";
import { Input } from "../src/components/common/input";
import styles from "../src/styles/login.module.scss";
import { useFormik } from "formik";
import { getFieldvalues } from "@/src/utils/functions";
import ErrorLabel from "@/src/components/common/error-label";
import { useState } from "react";

export default function AdminPage() {

  const [errorText,setErrorText] = useState<string|undefined>(undefined);
  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: undefined,
    onSubmit: async (values) => {
      const url = "http://127.0.0.1:8080/user/admin_login";
      const response = await window.fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if(response.ok){

        const data  = await response.json()
        localStorage.setItem("admin_token",data.token);
        router.push(`/dashboard/admin/`)
        
      }else{
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
      <div className=" max-w-[450px] lg:max-w-none m-auto lg:min-w-[450px] justify-self-center h-fit self-center">
        <Image
          className="lg:hidden mb-12.5"
          src="/imgs/logo.png"
          alt="lendsqr Logo"
          width={120}
          height={18}
        />
        <ErrorLabel perm error={errorText} />
        <h1 className=" text-primary-400 text-4xl lg:text-[40px] font-bold">
          Admin Login
        </h1>
        <p className="text-secondary-100 my-1 lg:mt-2.5">
          Enter details to login.
        </p>
        <form onSubmit={form.handleSubmit}>
          <InputField label="username" {...getFieldvalues("username", form)} />
          <PasswordField
            label="Password"
            {...getFieldvalues("password", form)}
          />
          <a
            href=""
            className="text-primary-400 text-sm font-medium mt-6 block"
          >
            FORGOT PASSWORD?
          </a>
          <Button
            className="mt-7.5"
            color="primary"
            variant="filled"
            type="submit"
          >
            LOG IN
          </Button>
        </form>
      </div>
    </div>
  );
}

