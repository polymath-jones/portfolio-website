import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import Button from "../src/components/form/button";
import InputField from "../src/components/form/input-field";
import PasswordField from "../src/components/form/password-field";
import styles from "../src/styles/login.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" lg:block hidden">
        <Image
          src="/svgs/logo.svg"
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
          src="/svgs/logo.svg"
          alt="lendsqr Logo"
          width={120}
          height={18}
        />
        <h1 className=" text-secondary-400 text-4xl lg:text-[40px] font-bold">
          Welcome!
        </h1>
        <p className="text-secondary-100 my-1 lg:mt-2.5">
          Enter details to login.
        </p>
        <InputField label="Email" name="email" />
        <PasswordField label="Password" name="password" />
        <a href="" className="text-primary-400 text-sm font-medium mt-6 block">
          FORGOT PASSWORD?
        </a>
        <Button onClick={() => router.push(`/dashboard/users/`)} className="mt-7.5" color="primary" variant="filled">
          LOG IN
        </Button>
      </div>
    </div>
  );
}
