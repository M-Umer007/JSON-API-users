
const DynamicUser = async (props: any) => {
    const res = await (await fetch('https://jsonplaceholder.typicode.com/users/')).json();
     const data = (res.find((res:any)=>res.id == props.params.id))

     if(!data){
         return  (<div
         className="h-screen w-screen bg-cover bg-center flex items-center justify-center text-white"
         style={{
           backgroundImage:
             "url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with any desired image URL
         }}
       >
         <h1 className="text-4xl font-bold ">
           Page not found
         </h1>
       </div>
         )
        }

	return  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-8 w-3/4 md:w-1/2">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
     User id : {data.id}
      </h1>
      <h2 className="text-2xl font-semibold text-blue-600">{data.name}</h2>
      <p className="text-gray-700">
        <span className="font-medium">Username:</span> {data.username}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Email:</span> {data.email}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Phone:</span> {data.phone}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Website:</span>{" "}
        <a
          href={`https://${data.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {data.website}
        </a>
      </p>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">Address:</h3>
        <p className="text-gray-700">
          {data.address.suite}, {data.address.street}, {data.address.city} -{" "}
          {data.address.zipcode}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-800">Company:</h3>
        <p className="text-gray-700">
          <span className="font-medium">Name:</span> {data.company.name}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Catchphrase:</span>{" "}
          {data.company.catchPhrase}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">BS:</span> {data.company.bs}
        </p>
      </div>
    </div>
  </div>
};

export default DynamicUser;