import Router from "next/router";
import router from "next/router";
import { useState } from "react";
import { Election, User } from "../../../utils/interfaces";
import Dropdown, { DropdownItem } from "../../common/dropdown";

interface Props {
  elections: Election[];
  openFilterPane: VoidFunction;
  setElection: (e: Election) => void;
}

const ElectionsTable: React.FC<Props> = ({
  elections,
  openFilterPane,
  setElection,
}) => {
  const tableHeaders = [
    "ID",
    "Title",
    "Scope",
    "Scope Value",
    "Candidates",
    "Registered",
    "Status",
  ];

  const statusColors = {
    active: "text-accent-success bg-accent-success ",
    blacklisted: "text-accent-danger bg-accent-danger",
    pending: "text-accent-yellow bg-accent-yellow",
    inactive: "text-secondary-100 bg-secondary-100",
  };

  const statuses = ["active", "blacklisted", "pending", "inactive"] as const;

  return (
    <table className="w-full">
      <thead>
        <tr className="sticky top-0 bg-white">
          {tableHeaders.map((h, index) => (
            <th key={index} className=" items-center gap-2.5">
              <button className="flex items-center gap-2.5">
                <span className="font-semibold text-xs text-secondary-400 uppercase">
                  {h}
                </span>
                {/* prettier-ignore */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z" fill="#545F7D"/>
                </svg>
              </button>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {elections.map((election) => {
          const randStatus = statuses[Math.floor(Math.random() * 3)];
          const color = statusColors[randStatus];

          return (
            <tr
              className="cursor-pointer"
              onClick={() => setElection(election)}
            >
              <td>{election.id} </td>
              <td>{election.title} </td>
              <td>{election.scope} </td>
              <td>{election.scope_value} </td>
              <td>{election.candidates.length.toString()} </td>
              <td>{election.voters.length.toString()} </td>
              <td onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-2.5">
                  <div className="w-25">
                    <span
                      className={`block font-medium capitalize bg-opacity-10 py-1 px-2.5 w-fit text-center rounded-full ${color}`}
                    >
                      {election.status}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ElectionsTable;
