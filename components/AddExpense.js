"use client";
import { useState } from "react";

const AddExpense = ({ userId, onExpenseAdded }) => {
    const [expense, setExpense] = useState("");

    const handleInputChange = (e) => {
        setExpense(e.target.value);
    };

    const handleAddExpense = async () => {
        const amount = parseFloat(expense);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid expense amount");
            return;
        }

        try {
            const res = await fetch(`/api/users`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: userId,
                    expense: amount,
                }),
            });

            if (res.ok) {
                onExpenseAdded();  // Callback to refresh the data on success
                setExpense("");
            } else {
                throw new Error("Failed to update expense");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="expense"
                value={expense}
                onChange={handleInputChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-purple-200 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-1 transition-colors duration-200 ease-in-out"
            />
            <button
                onClick={handleAddExpense}
                className="inline-flex text-white bg-purple-500 border-0 py-1 px-6 focus:outline-none hover:bg-purple-600 rounded w-fit"
            >
                Add
            </button>
        </div>
    );
};

export default AddExpense;
