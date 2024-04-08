import Link from "next/link";

export default function NotFound() {
  
  return (
    <div className="flex items-center justify-center h-screen">

      <div>
        <h1 className={`text-4xl text-center text-slate-600 mb-8`}>Annoiance</h1>
        <div className="text-slate-500 text-xl font-mono text-center mb-2">
          Well you are lost!
        </div>
        <Link href={'/'} className="underline text-slate-500 font-mono">Click here to find your way back</Link>
      </div>
    </div>
  );
}