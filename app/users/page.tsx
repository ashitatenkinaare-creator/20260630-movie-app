// app/users/page.tsx
interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ユーザー一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b p-2">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}