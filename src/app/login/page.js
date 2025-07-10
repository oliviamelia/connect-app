'use client';import { useRouter } from 'next/navigation';
export default function LoginPage() {
const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/admin/users');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Connect With Us</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            disabled
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            disabled
          />
          <button
            type="submit"
            className="w-full py-2 bg-black text-white font-semibold rounded"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
