"use client";
import { useState, useEffect } from "react";
import AddExpense from "./AddExpense";
import DeleteUser from "./DeleteUser";

// Fetch users from API
const fetchUsers = async () => {
    try {
        const res = await fetch(`/api/users`, { method: "GET" , cache: "no-store" });
        if (!res.ok) throw new Error("Error fetching users");
        const data = await res.json();
        return data.users;
    } catch (err) {
        console.error(err);
    }
};

const UserList = () => {
    const [users, setUsers] = useState([]);

    // Fetch users on mount
    useEffect(() => {
        const getUsers = async () => {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers || []);
        };
        getUsers();
    }, []);

    // Refresh users after an action
    const refreshUsers = async () => {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers || []);
    };

    return (
        <>
            {users.map((user, i) => (
                <div className="p-3 w-full" key={i}>
                    <div className="relative flex justify-between items-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8 flex-col md:flex-row md:justify-between">
                        <div>
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1">{user.name}</h2>
                            <p className="leading-relaxed text-base text-gray-600">Balance:                             <span
                                className={`leading-relaxed text-base ${user.balance < 0 ? "text-red-500" : "text-green-500"
                                    }`}
                            >
                                {user.balance}
                            </span></p>

                        </div>

                        {/* Delete User Component at the top right corner */}
                        <div className="absolute top-2 right-2">
                            <DeleteUser userId={user._id} onUserDeleted={refreshUsers} />
                        </div>

                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            {/* Add Expense Component */}
                            <AddExpense userId={user._id} onExpenseAdded={refreshUsers} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserList;
