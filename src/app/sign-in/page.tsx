import Navbar from '../components/Navbar';
import LoginForm from '../components/ui/LoginForm';

 
export default function SignInPage() {
  return (
    <main className="flex items-center justify-center h-[100svh]">
      <Navbar />
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}