import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Loading</h1>;
  if (!user) route.push('/');
  if (user)
    return (
      <div className="p-10 mt-32 text-gray-700 rounded-lg shadow-xl">
        <img src={user.photoURL} className="w-10 h-10 ml-auto rounded-full" />
        <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Welcome to your dashboard {user.displayName}
        </h1>

        <button
          onClick={() => auth.signOut()}
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Sign out
        </button>
      </div>
    );
}
