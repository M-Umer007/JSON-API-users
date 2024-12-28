import Link from "next/link"
import Description from "./description-comp";
const  Home  = async () =>{
  
  const res = await (await fetch('https://jsonplaceholder.typicode.com/users/')).json();

 

  return (
  <div className="min-h-screen bg-gray-100 p-6">

    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Welcome to the User data Project!
      </h1>
      <Description/>
    </div>

    <div className="flex justify-center gap-10 flex-wrap sm:flex-nowrap">
      {/* Left Column */}
      <div className="w-full md:w-1/2">
        {res.slice(0, 5).map((res: any) => (
          <div key={res.id} className="flex justify-center items-center">
            <Link href={`/${res.id}`}>
              <div className="flex items-center flex-col min-w-64 border border-gray-900 m-2 bg-white p-4 shadow-lg rounded-md">
                <p className="font-semibold">Person: {res.id}</p>
                <p className="text-gray-700">Name: {res.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* Right Column */}
      <div className="w-full md:w-1/2">
        {res.slice(5, 10).map((res: any) => (
          <div key={res.id} className="flex justify-center items-center">
            <Link href={`/${res.id}`}>
              <div className="flex items-center flex-col min-w-64 border border-gray-900 m-2 bg-white p-4 shadow-lg rounded-md">
                <p className="font-semibold">Person: {res.id}</p>
                <p className="text-gray-700">Name: {res.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default Home

