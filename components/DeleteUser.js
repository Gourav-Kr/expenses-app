"use client";

const DeleteUser = ({ userId, onUserDeleted }) => {
    const handleDeleteUser = async () => {
        try {
            const res = await fetch(`/api/users?id=${userId}`, {
                method: "DELETE",
            });

            if (res.ok) {
                onUserDeleted(); // Callback to refresh the data on success
            } else {
                throw new Error("Failed to delete user");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <button
            onClick={handleDeleteUser}
            className="inline-flex text-white text-sm bg-red-500 border-0 py-[2px] px-[5px] focus:outline-none hover:bg-red-600 rounded-full"
        >
            ✕
        </button>
    );
};

export default DeleteUser;
