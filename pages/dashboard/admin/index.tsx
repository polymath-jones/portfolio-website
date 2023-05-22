import Button from "@/src/components/common/form/button";
import Tabs from "@/src/components/common/tabs";
import ElectionsTable from "@/src/components/dashboard/election/elections-table";
import DashboardLayout from "@/src/components/layouts/dashboard";
import { Election } from "@/src/utils/interfaces";
import { log } from "console";
import router from "next/router";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [elections, setElections] = useState<Election[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [currentElection, setCurrentElection] = useState<Election | undefined>(
    undefined
  );

  useEffect(() => {
    getElections();
  }, [currentElection]);

  const getElections = async () => {
    const url = `http://127.0.0.1:8080/election/all`;
    const token = localStorage.getItem("admin_token");
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
      setElections(data.elections.map((e: any) => ({ ...e, id: e?._id?.$oid })));
    } else {
    }
  };

  const beginElection = async () => {
    const url = `http://127.0.0.1:8080/election/begin`;
    const token = localStorage.getItem("admin_token");
    const response = await window.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        election_id: currentElection?.id,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setCurrentElection({ ...currentElection, status: "ONGOING" } as any);
      console.log(data);
    } else {
    }
  };

  const endElection = async () => {
    const url = `http://127.0.0.1:8080/election/end`;
    const token = localStorage.getItem("admin_token");
    const response = await window.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        election_id: currentElection?.id,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setCurrentElection({ ...currentElection, status: "ENDED" } as any);
      console.log(data);
    } else {
    }
  };

  const getResults = async () => {
    const url = `http://127.0.0.1:8080/election/results/${currentElection?.id}`;
    const token = localStorage.getItem("admin_token");
    const response = await window.fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setResults(data.candidates);
    } else {
    }
  };

  return (
    <DashboardLayout>
      <div className="pb-20">
        <div className="flex flex-col  md:flex-row md:items-center justify-between mt-8">
          <h2 className="font-medium text-secondary-400 text-2xl">Elections</h2>
          <div className="flex items-center gap-2.5 mt-5 md:mt-o">
            <Button
              compact
              className="py-2"
              color="primary"
              variant="outlined"
              onClick={() => {
                router.push("admin/create");
              }}
            >
              <span className=" text-xs md:text-sm font-semibold">
                CREATE NEW
              </span>
            </Button>
          </div>
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
              setElection={(e) => setCurrentElection(e)}
              elections={[...elections]}
              openFilterPane={() => null}
            />
          </div>
        )}
        {currentElection && (
          <div className="flex">
            <div className="pt-10 min-w-[500px]">
              <Button
                compact
                className="py-2"
                color="primary"
                variant="outlined"
                onClick={() => {
                  setCurrentElection(undefined);
                  setResults([])
                }}
              >
                <span className=" text-xs md:text-sm font-semibold">BACK</span>
              </Button>
              <div className="mt-10">
                <p className="text-2xl font-bold mb-5">
                  {currentElection.title}{" "}
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
                      className="py-2"
                      color="primary"
                      variant="filled"
                      onClick={() => {
                        beginElection();
                      }}
                    >
                      <span className=" text-xs md:text-sm font-semibold">
                        BEGIN ELECTIONS
                      </span>
                    </Button>
                  )}
                  {currentElection.status === "ONGOING" && (
                    <Button
                      compact
                      className="py-2"
                      color="primary"
                      variant="filled"
                      onClick={() => {
                        endElection();
                      }}
                    >
                      <span className=" text-xs md:text-sm font-semibold">
                        END ELECTIONS
                      </span>
                    </Button>
                  )}

                  <Button
                    compact
                    className="py-2"
                    color="primary"
                    variant="outlined"
                    onClick={() => {
                      getResults();
                    }}
                  >
                    <span className=" text-xs md:text-sm font-semibold">
                      VIEW RESULTS
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 p-10 w-full">
              {results && results.length > 0 && (
                <>
                  <h2 className="font-medium text-secondary-400 text-xl">
                    Candidates
                  </h2>
                  <p>View election results</p>
                  <ul>
                    {results.map((r) => (
                      <div
                        className={`p-5 bg-primary-400 hover:bg-opacity-30 cursor-pointer bg-opacity-20 my-5 `}
                      >
                        <p className=" text-ellipsis max-w-[800px] overflow-hidden">
                          <b>{r.name}:</b> {r.votes}
                        </p>
                      </div>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
