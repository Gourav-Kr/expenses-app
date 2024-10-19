"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

const addUser = () => {

  const [userName, setUserName] = useState("");
  const [balance, setBalance] = useState("");
  const [increment, setIncrement] = useState("");
  const [sat, setSat] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const bal = parseInt(balance)
    const inc = parseInt(increment)
    const satal = parseInt(sat)

    if (!userName || !balance) {
      alert("name and balance are required")
      return
    }

    console.log("name",userName)

    try {

      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName,
          balance: bal,
          increment: inc,
          sat: satal
        }),
      });

      if (res.ok) {
        router.push('/')
      } else {
        throw new Error("failed to create user");
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="flex flex-col gap-3 mx-2 justify-between items-center" onSubmit={handleSubmit}>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col max-w-2xl mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add User</h2>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600 mr-2">Name:</label>
          <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" id="full-name" name="full-name" placeholder="Name" className=" text-sm w-1/2 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-500 py-1 px-3 leading-3 transition-colors duration-200 ease-in-out" />
        </div>

        <div className="relative mb-4">
          <label htmlFor="balance" className="leading-7 text-sm text-gray-600 mr-2">Balance:</label>
          <input onChange={(e) => setBalance(e.target.value)} value={balance} type="text" id="balance" name="full-name" placeholder="balance" className=" text-sm w-2/3 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-500 py-1 px-3 leading-3 transition-colors duration-200 ease-in-out" />
        </div>

        <div className="relative mb-4">
          <label htmlFor="increment" className="leading-7 text-sm text-gray-600 mr-2">Daily Allowance:</label>
          <input onChange={(e) => setIncrement(e.target.value)} value={increment} type="text" id="increment" name="full-name" placeholder="daily increment" className=" text-sm w-1/2 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-500 py-1 px-3 leading-3 transition-colors duration-200 ease-in-out" />
        </div>

        <div className="relative mb-4">
          <label htmlFor="saturdayAllowance" className="leading-7 text-sm text-gray-600 mr-2">Saturday:</label>
          <input onChange={(e) => setSat(e.target.value)} value={sat} type="text" id="saturdayAllowance" name="full-name" placeholder="saturday allowance" className=" text-sm w-1/2 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-500 py-1 px-3 leading-3 transition-colors duration-200 ease-in-out" />
        </div>

        <button type="submit" className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-md w-fit">Add</button>
      </div>
    </form>
  )
}

export default addUser