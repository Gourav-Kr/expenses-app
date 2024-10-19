import UserList from "@/components/UserList";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="w-full max-w-4xl">
        <UserList />
      </div>
    </div>
  );
}
