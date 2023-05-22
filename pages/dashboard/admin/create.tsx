import Button from "@/src/components/common/form/button";
import Tabs from "@/src/components/common/tabs";
import ElectionsTable from "@/src/components/dashboard/election/elections-table";
import DashboardLayout from "@/src/components/layouts/dashboard";
import { useFormik } from "formik";
import { useState } from "react";
import { getFieldvalues } from "@/src/utils/functions";
import InputField from "@/src/components/common/form/input-field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/common/select";
import ErrorLabel from "@/src/components/common/error-label";
import router from "next/router";

export default function CreateNewElection() {
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const [completed, setCompleted] = useState(false);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.DOUqrpctq0euJJXwkuW2KXrezWmjkVti7pwnbzPLx8o";

  const findCandidate = async (reg_no: string) => {
    const url = `http://127.0.0.1:8080/admin/get_user/${reg_no}`;
    const response = await window.fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      const details = {
        reg_no: data.reg_no,
        public_key: data.public_key,
        name: data.name,
      };
      const candidates = form.values.candidates as any[];

      if (
        candidates.find((cand) => cand.reg_no == details.reg_no) == undefined
      ) {
        candidates.push(details);
        form.setFieldValue("candidates", candidates);
      }
    } else {
      setErrorText("Invalid candidate entry");
    }
  };

  const form = useFormik({
    initialValues: {
      title: "",
      scope: "general",
      scope_value: "",
      candidate: undefined as string | undefined,
      candidates: [] as any[],
    },
    validationSchema: undefined,
    onSubmit: async (vs) => {
      const values = { ...vs };
      if (values.candidates.length > 1) {
        values.candidates = values.candidates.map((c) => c.public_key);
        delete values.candidate;
        const url = `http://127.0.0.1:8080/election/create`;
        const response = await window.fetch(url, {
          method: "POST",
          //   credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          setCompleted(true);
        } else {
          setErrorText("Error occurred");
        }
      } else {
        setErrorText("Candidates must be greater than two");
      }
      //
    },
  });
  return (
    <DashboardLayout>
      <div className="pb-20">
        <div className="flex flex-col gap-10 align-middle  md:flex-row md:items-center mt-8">
          <div className="flex items-center gap-2.5 md:mt-o">
            <Button compact className="py-2" color="primary" variant="outlined" onClick={()=> router.push("/dashboard/admin")}>
              <span className=" text-xs md:text-sm font-semibold">BACK</span>
            </Button>
          </div>
          <h2 className="font-medium text-secondary-400 text-2xl">
            Create New Election
          </h2>
        </div>

        {!completed && (
          <div className="w-[500px] py-20">
            <ErrorLabel error={errorText} />
            <form onSubmit={form.handleSubmit}>
              <InputField label="Title" {...getFieldvalues("title", form)} />
              <div className="mt-5">
                <Select {...getFieldvalues("scope", form)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select scope" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="general">GENERAL</SelectItem>
                      <SelectItem value="facaulty">FACAULTY</SelectItem>
                      <SelectItem value="department">DEPARTMENT</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <InputField
                label="Scope Value"
                {...getFieldvalues("scope_value", form)}
              />
              <div className="flex justify-between items-center mt-7.5">
                <InputField
                  label="Candidate Reg no"
                  {...getFieldvalues("candidate", form)}
                />
                <Button
                  className=""
                  color="primary"
                  variant="outlined"
                  onClick={(e) => {
                    e.preventDefault();
                    findCandidate(form.values.candidate as string);
                  }}
                >
                  ADD CANDIDATE
                </Button>
              </div>
              <div className="p-2.5 bg-slate-200 mt-7.5">
                <h4 className="mb-5 text-primary-400">Candidates</h4>
                <ul>
                  {form.values.candidates.map((candidate: any) => (
                    <li>
                      {candidate.name}-{candidate.reg_no}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className="mt-7.5"
                color="primary"
                variant="filled"
                type="submit"
              >
                CREATE
              </Button>
            </form>
          </div>
        )}

        {completed && (
          <div>
            <h2 className="font-bold text-3xl text-primary-400 py-20">Election <br/> Created successfully</h2>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
