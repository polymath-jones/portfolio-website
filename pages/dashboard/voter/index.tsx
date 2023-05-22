import ErrorLabel from "@/src/components/common/error-label";
import Button from "@/src/components/common/form/button";
import PasswordField from "@/src/components/common/form/password-field";
import Tabs from "@/src/components/common/tabs";
import ElectionsTable from "@/src/components/dashboard/election/elections-table";
import DashboardLayout from "@/src/components/layouts/dashboard";
import { Election } from "@/src/utils/interfaces";
import router from "next/router";
import { useEffect, useState } from "react";

export default function VoterDashboard() {
  const [elections, setElections] = useState<Election[]>([]);
  const [currentElection, setCurrentElection] = useState<Election | undefined>(
    undefined
  );
  const [user, setUser] = useState<any>();
  const [candidates, setCandidates] = useState<any[]>([]);
  const [selectedCandiate, setSelectedCandidate] = useState<any>();
  const [isRegistered, setIsRegistered] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [password, setPassword] = useState<any>();
  const [errorText, setErrorText] = useState<string | undefined>(undefined);

  useEffect(() => {
    getElections();
  }, [currentElection]);

  const getElections = async () => {
    const user = JSON.parse(localStorage.getItem("me")!);
    setUser(user);
    const url = `http://127.0.0.1:8080/election/all`;
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.DOUqrpctq0euJJXwkuW2KXrezWmjkVti7pwnbzPLx8o";
    const response = await window.fetch(url, {
      method: "GET",
      //   credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();

      const elections = (
        data.elections.map((e: any) => ({ ...e, id: e._id.$oid })) as Election[]
      ).filter((e) => {
        if (
          e.scope.toUpperCase() === "GENERAL" ||
          (e.scope.toUpperCase() === "FACAULTY" &&
            e.scope_value.toLocaleUpperCase() ===
              user.facaulty.toLocaleUpperCase()) ||
          (e.scope.toUpperCase() === "DEPARTMENT" &&
            e.scope_value.toUpperCase() === user.department.toUpperCase())
        ) {
          return true;
        }
        return false;
      });
      setElections(elections);
    } else {
    }
  };

  const handleSetElection = async (e: Election) => {
    // get balance and registeration state
    const url = `http://127.0.0.1:8080/vote/get_status`;
    const token = localStorage.getItem("user_token");
    setIsRegistered(e.voters.includes(user.public_key));
    const response = await window.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        election_id: e.id,
        public_key: user.public_key,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setHasVoted(data.status === "VOTED");
      setCurrentElection(e);
    } else {
    }
  };

  const register = async () => {
    // get balance and registeration state
    const url = `http://127.0.0.1:8080/vote/register`;
    const token = localStorage.getItem("user_token");
    const response = await window.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        election_id: currentElection?.id,
        pk: user.public_key,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setIsRegistered(true);
      console.log(data);
    } else {
    }
  };

  const getCandidates = async () => {
    // get balance and registeration state
    const url = `http://127.0.0.1:8080/vote/candidates/${currentElection?.id}`;
    const token = localStorage.getItem("user_token");
    const response = await window.fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setCandidates(data.candidates);
      console.log(data);
    } else {
    }
  };

  const vote = async () => {
    // get balance and registeration state
    const url = `http://127.0.0.1:8080/vote/now`;
    const token = localStorage.getItem("user_token");
    const response = await window.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        election_id: currentElection?.id,
        password,
        reg_no: user.reg_no,
        candidate_id: selectedCandiate.public_key,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setHasVoted(true);
      console.log(data);
    } else {
    }
  };

  return (
    <DashboardLayout>
      <div className="pb-20">
        <div className="flex flex-col  md:flex-row md:items-center justify-between mt-8">
          <h2 className="font-medium text-secondary-400 text-2xl">
            My Elections
          </h2>
        </div>

        <div>
          <Tabs
            active={0}
            switchTab={() => null}
            tabs={["All", "Pending", "Ended"]}
          />
        </div>
        {currentElection === undefined && (
          <div>
            <ElectionsTable
              setElection={(e) => handleSetElection(e)}
              elections={[...elections]}
              openFilterPane={() => null}
            />
          </div>
        )}

        {currentElection && (
          <div className="pt-10">
            <Button
              compact
              className="py-2"
              color="primary"
              variant="outlined"
              onClick={() => {
                setCurrentElection(undefined);
              }}
            >
              <span className=" text-xs md:text-sm font-semibold">BACK</span>
            </Button>

            <div className="flex">
              <div className="mt-10 min-w-[500px]">
                <p className="text-2xl font-bold mb-5">
                  {currentElection.title}
                </p>
                <p>
                  <b>ID:</b> {currentElection.id}
                </p>

                <p>
                  <b>SCOPE:</b> {currentElection.scope}
                </p>
                <p>
                  <b>VALUE:</b> {currentElection.scope_value}
                </p>
                <p>
                  <b>STATUS:</b> {currentElection.status}
                </p>
                <p>
                  <b>REGISTERED VOTERS:</b> {currentElection.voters.length}
                </p>
                <p>
                  <b>CANDIDATES:</b> {currentElection.candidates.length}
                </p>
                <div className="flex gap-5 mt-10 items-center">
                  {currentElection.status === "PENDING" && (
                    <Button
                      compact
                      className="py-4 px-4"
                      color="primary"
                      variant="filled"
                      onClick={() => {
                        register();
                      }}
                      disabled={isRegistered}
                    >
                      <span className=" text-xs md:text-sm font-semibold">
                        {isRegistered ? "YOU HAVE REGISTERED" : "REGISTER"}
                      </span>
                    </Button>
                  )}

                  {currentElection.status === "ONGOING" &&
                   ( candidates.length == 0 || hasVoted) && (
                      <Button
                        compact
                        className="py-4 px-4"
                        color="primary"
                        variant="filled"
                        disabled={hasVoted}
                        onClick={() => {
                          getCandidates();
                        }}
                      >
                        <span className=" text-xs md:text-sm font-semibold">
                          {hasVoted ? "YOU HAVE VOTED" : "BEGIN VOTING"}
                        </span>
                      </Button>
                    )}

                  {currentElection.status === "ENDED" && (
                    <Button
                      compact
                      className="py-4 px-4"
                      color="primary"
                      variant="outlined"
                      onClick={() => {}}
                    >
                      <span className=" text-xs md:text-sm font-semibold">
                        VIEW RESULTS
                      </span>
                    </Button>
                  )}
                </div>
              </div>
              <div className="bg-slate-200 p-10 w-full">
                {candidates.length > 1 && !hasVoted && (
                  <div>
                    <ErrorLabel perm error={errorText} />
                    <h2 className="font-medium text-secondary-400 text-xl">
                      Candidates
                    </h2>
                    <p>Select a candidate</p>
                    <ul>
                      {candidates.map((c) => (
                        <div
                          onClick={() => setSelectedCandidate(c)}
                          className={`p-5 bg-primary-400 hover:bg-opacity-30 cursor-pointer bg-opacity-20 my-5 ${
                            selectedCandiate?.public_key === c.public_key &&
                            "border-solid border-primary-400 border-4"
                          }`}
                        >
                          <p className=" text-ellipsis max-w-[800px] overflow-hidden">
                            <b>{c.name}:</b> {c.public_key}
                          </p>
                        </div>
                      ))}
                    </ul>
                    <PasswordField
                      label="Password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      compact
                      className="py-4 px-4 mt-5"
                      color="primary"
                      variant="outlined"
                      onClick={() => {
                        vote();
                      }}
                      disabled={selectedCandiate === undefined}
                    >
                      <span className=" text-xs md:text-sm font-semibold">
                        COMPLETE VOTE
                      </span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
