import router from "next/router";
import { useEffect, useState } from "react";
import { User } from ".";
import Button from "../../../src/components/common/form/button";
import DashboardLayout from "../../../src/components/layouts/dashboard";
import Tabs from "../../../src/components/common/tabs";

const UsersDetailsPage = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${1}`
      );
      if (res.ok) {
        const data = (await res.json()) as User;
        console.log(data);

        setUser(data);
      }
    } catch (e) {}
  };

  return (
    <DashboardLayout>
      <div className="pb-20">
        <button
          onClick={() => router.push(`/dashboard/users/`)}
          className="flex items-center gap-2.5"
        >
          {/* prettier-ignore */}
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z" fill="#545F7D"/>
          </svg>
          <span className="text-secondary-100">Back to Users</span>
        </button>
        <div className="flex flex-col  md:flex-row md:items-center justify-between mt-8">
          <h2 className="font-medium text-secondary-400 text-2xl">
            User Details
          </h2>
          <div className="flex items-center gap-2.5 mt-5 md:mt-o">
            <Button compact className="py-2" color="danger" variant="outlined">
              <span className="text-xs md:text-sm font-semibold">
                BLACKLIST USER
              </span>
            </Button>
            <Button compact className="py-2" color="primary" variant="outlined">
              <span className=" text-xs md:text-sm font-semibold">
                ACTIVATE USER
              </span>
            </Button>
          </div>
        </div>

        <div className="sm:p-7.5 py-7.5 flex-col md:flex-row gap-10 md:gap-0 flex md:items-center mt-10">
          <div>
            <div className="flex items-center gap-5 md:pr-7.5 border-r border-secondary-100 border-opacity-20">
              <div className="w-25 h-25 rounded-full bg-secondary-400 bg-opacity-20 flex items-center justify-center">
                {/* prettier-ignore */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.04053 35.1796C6.47961 32.2202 7.79365 29.6264 9.97961 27.4C12.7405 24.6 16.0732 23.2 19.9796 23.2C23.886 23.2 27.2204 24.6 29.9796 27.4C32.1796 29.6266 33.5062 32.2204 33.9593 35.1796M28.1405 14.0204C28.1405 16.247 27.3468 18.1532 25.7593 19.7408C24.1734 21.3408 22.253 22.1408 20.0001 22.1408C17.7594 22.1408 15.8409 21.3408 14.2409 19.7408C12.6534 18.1533 11.8596 16.247 11.8596 14.0204C11.8596 11.7673 12.6534 9.84679 14.2409 8.25959C15.8409 6.67367 17.7596 5.87991 20.0001 5.87991C22.2532 5.87991 24.1737 6.67367 25.7593 8.25959C27.3468 9.84711 28.1405 11.7674 28.1405 14.0204Z" stroke="#213F7D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-medium text-secondary-400 text-[22px]">
                  {`${user?.profile.firstName} ${user?.profile.lastName}`}
                </p>
                <span className="text-sm text-secondary-100">
                  {"LSQFf587g90"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex md:mx-7.5 gap-15">
            <div>
              <span className="text-secondary-100 text-sm">User's tier</span>
              {/* prettier-ignore */}
              <svg className="mt-2.5" width="56" height="16" viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
                    <g clip-path="url(#clip0_5530_0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9844 0.959992C27.8519 0.966867 27.7369 1.05437 27.6956 1.18062L26.0894 5.99998H20.9451V6.0006C20.8069 6.0006 20.6844 6.08935 20.642 6.2206C20.5988 6.35185 20.6451 6.49561 20.7557 6.5781L24.9344 9.63379L23.3282 14.6213V14.6207C23.2851 14.7532 23.3326 14.8976 23.4451 14.9788C23.5576 15.0607 23.7094 15.0601 23.8213 14.9782L28 11.9225L32.1788 14.9782C32.2906 15.0601 32.4425 15.0607 32.555 14.9788C32.6675 14.8976 32.715 14.7532 32.6719 14.6207L31.0656 9.63316L35.2444 6.57748V6.5781C35.355 6.49561 35.4012 6.35185 35.3581 6.2206C35.3156 6.08935 35.1931 6.0006 35.055 6.0006H29.9107L28.3044 1.18124V1.18062C28.2601 1.04374 28.1288 0.953112 27.9844 0.959992H27.9844ZM28 2.29374L29.3756 6.41998V6.4206C29.4181 6.55185 29.5413 6.64122 29.68 6.6406H34.0738L30.4987 9.255V9.25563C30.3875 9.33688 30.3406 9.48062 30.3831 9.61251L31.7587 13.8807L28.1893 11.2712H28.1887C28.0762 11.1887 27.9237 11.1887 27.8112 11.2712L24.2417 13.8807L25.6174 9.61251H25.6167C25.6592 9.48063 25.6124 9.33687 25.5011 9.25563L21.9261 6.64123H26.3198V6.6406C26.4586 6.64123 26.5817 6.55185 26.6242 6.4206L27.9998 2.29436L28 2.29374Z" fill="#E9B200"/>
                    </g>
                    <g clip-path="url(#clip1_5530_0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9844 0.959992C47.8519 0.966867 47.7369 1.05437 47.6956 1.18062L46.0894 5.99998H40.9451V6.0006C40.8069 6.0006 40.6844 6.08935 40.642 6.2206C40.5988 6.35185 40.6451 6.49561 40.7557 6.5781L44.9344 9.63379L43.3282 14.6213V14.6207C43.2851 14.7532 43.3326 14.8976 43.4451 14.9788C43.5576 15.0607 43.7094 15.0601 43.8213 14.9782L48 11.9225L52.1788 14.9782C52.2906 15.0601 52.4425 15.0607 52.555 14.9788C52.6675 14.8976 52.715 14.7532 52.6719 14.6207L51.0656 9.63316L55.2444 6.57748V6.5781C55.355 6.49561 55.4012 6.35185 55.3581 6.2206C55.3156 6.08935 55.1931 6.0006 55.055 6.0006H49.9107L48.3044 1.18124V1.18062C48.2601 1.04374 48.1288 0.953112 47.9844 0.959992H47.9844ZM48 2.29374L49.3756 6.41998V6.4206C49.4181 6.55185 49.5413 6.64122 49.68 6.6406H54.0738L50.4987 9.255V9.25563C50.3875 9.33688 50.3406 9.48062 50.3831 9.61251L51.7587 13.8807L48.1893 11.2712H48.1887C48.0762 11.1887 47.9237 11.1887 47.8112 11.2712L44.2417 13.8807L45.6174 9.61251H45.6167C45.6592 9.48063 45.6124 9.33687 45.5011 9.25563L41.9261 6.64123H46.3198V6.6406C46.4586 6.64123 46.5817 6.55185 46.6242 6.4206L47.9998 2.29436L48 2.29374Z" fill="#E9B200"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5530_0">
                    <rect width="16" height="16" fill="white" transform="translate(20)"/>
                    </clipPath>
                    <clipPath id="clip1_5530_0">
                    <rect width="16" height="16" fill="white" transform="translate(40)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div>
              <span className="font-medium text-secondary-400 text-[22px]">
                ₦{user?.accountBalance}
              </span>
              <br />
              <span className="text-xs text-secondary-400">
                {user?.accountNumber}
              </span>
            </div>
          </div>
        </div>

        <div>
          <Tabs
            active={0}
            switchTab={() => null}
            tabs={[
              "General Details",
              "Documents",
              "Bank Details",
              "Loans",
              "Savings",
              "App and System",
            ]}
          />
        </div>
        <div>
          {getUserData(user!).map((data, index) => (
            <div key={index} className="mt-15">
              <h3 className="text-secondary-100 font-medium">{data.title} </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-7.5 gap-x-5 gap-y-7.5">
                {data.details.map((detail, index) => (
                  <div key={index} className="text-secondary-100">
                    <h6 className="uppercase text-xs mb-2">{detail.title}</h6>
                    <span className="font-medium text-sm md:text-base block w-full overflow-ellipsis overflow-hidden">
                      {detail.value}{" "}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
export default UsersDetailsPage;

const getUserData = (user: User) => {
  return [
    {
      title: "Personal Information",
      details: [
        {
          title: "full Name",
          value: `${user?.profile.firstName} ${user?.profile.lastName}`,
        },
        {
          title: "Phone Number",
          value: user?.profile.phoneNumber,
        },
        {
          title: "Email Address",
          value: user?.email,
        },
        {
          title: "Bvn",
          value: user?.profile.bvn,
        },
        {
          title: "Gender",
          value: user?.profile.gender,
        },
        {
          title: "Marital Status",
          value: "Single",
        },
        {
          title: "Children",
          value: "none",
        },
        {
          title: "Type of residence",
          value: "Parent’s Apartment",
        },
      ],
    },
    {
      title: "Education and Employment",
      details: [
        {
          title: "level of education",
          value: user?.education.level,
        },
        {
          title: "employment status",
          value: user?.education.employmentStatus,
        },
        {
          title: "sector of employment",
          value: user?.education.sector,
        },
        {
          title: "Duration of employment",
          value: user?.education.duration,
        },
        {
          title: "office email",
          value: user?.education.officeEmail,
        },
        {
          title: "Monthly income",
          value: `₦${user?.education.monthlyIncome[0]}-₦${user?.education.monthlyIncome[1]}`,
        },
        {
          title: "loan repayment",
          value: "₦" + user?.education.loanRepayment,
        },
      ],
    },
    {
      title: "Socials",
      details: [
        {
          title: "twitter",
          value: user?.socials.twitter,
        },
        {
          title: "facebook",
          value: user?.socials.facebook,
        },
        {
          title: "instagram",
          value: user?.socials.instagram,
        },
      ],
    },
    {
      title: "Guarantor",
      details: [
        {
          title: "full name",
          value: `${user?.guarantor.firstName} ${user?.guarantor.lastName}`,
        },
        {
          title: "phone number",
          value: user?.guarantor.phoneNumber,
        },
        {
          title: "email address",
          value: user?.guarantor.address,
        },
        {
          title: "relationship",
          value: "sister",
        },
      ],
    },
  ];
};
