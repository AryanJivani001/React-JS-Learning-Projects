import { useLoaderData } from "react-router-dom";


function Github() {
    const data=useLoaderData()

    return (
        <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
            Github Username:{data.login}
            <img src={data.avatar_url  }  />
        </div>
    );
}

export default Github;

export const githubinfoloader = async () =>{
    const res = await fetch("https://api.github.com/users/AryanJivani001");
    return res.json();
}
