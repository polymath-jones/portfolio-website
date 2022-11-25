import { ReactNode, useEffect, useState } from "react";
import DashboardLayout from "../../../src/components/layouts/dashboard";
import UserStats from "../../../src/components/dashboard/user/user-statistics";
import UserTable from "../../../src/components/dashboard/user/user-table";
import { User, UserStatistics } from "../../../src/utils/interfaces";
import { Paginator } from "../../../src/components/common/paginator";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [userStats, setUserStats] = useState<UserStatistics>();
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 10;
  const totalPages = Math.floor(users.length / 10);

  useEffect(() => {
    fetchAndStoreUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter(
      (_, index) =>
        index >= (currentPage - 1) * PER_PAGE &&
        index < (currentPage - 1) * PER_PAGE + PER_PAGE
    );
    setFilteredUsers(filteredUsers);
  }, [currentPage, users]);

  useEffect(() => {
    const stats = {
      users: 0,
      active_users: 0,
      users_with_loans: 0,
      users_with_savings: 0,
    };
    if (users) {
      users.map((u) => {
        stats.users++;
        if (new Date(Date.now()) < new Date(u.lastActiveDate ?? "")) {
          stats.active_users++;
        }
      });
    }
    setUserStats(stats);
  }, [users]);

  const fetchAndStoreUsers = async () => {
    const usersSerialized = localStorage.getItem("users");
    if (!usersSerialized) {
      const res = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      if (res.ok) {
        const data = (await res.json()) as User[];
        setUsers(data);
        localStorage.setItem("users", JSON.stringify(data));
      }
    } else {
      setUsers(JSON.parse(usersSerialized));
    }
  };

  return (
    <DashboardLayout>
      <div className="mt-5 md:mt-15 pb-20">
        <h2 className="font-medium text-2xl text-secondary-400">Users</h2>
        <div className="my-5 md:my-10">
          {userStats ? <UserStats data={userStats} /> : null}
        </div>
        <div className="h-[400px]  overflow-auto">
          <div className="min-w-[1024px]">
            <UserTable users={filteredUsers} openFilterPane={() => null} />
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between mt-10 gap-2.5">
          <span className="text-sm text-secondary-100">
            Showing{" "}
            <span className="inline-block px-2 py-1 rounded-md text-secondary-400 font-medium bg-secondary-100 bg-opacity-20">
              {currentPage * PER_PAGE}
            </span>{" "}
            out of {users.length}
          </span>
          <Paginator {...{ currentPage, totalPages, setCurrentPage }} />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default UsersPage;
