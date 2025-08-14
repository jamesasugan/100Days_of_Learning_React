import { useState } from "react"
import DisplayMessage from "./DisplayMessage";
import InputName from "./InputName";
import Card from "./Card";

const UserInfo = () => {
    const [name, setName] = useState('');
    return (
        <>
        <div className="flex h-screen flex-col w-full">
            <InputName name={name} setName={setName} />
            <DisplayMessage name={name} />
            
        </div>
        <div className="flex h-screen flex-col w-full space-y-4 p-4">
            <Card title="Profile" className="rounded bg-green-200">
                <h1 className="font-bold">Name: James</h1>
                <p>Role: Developer</p>
            </Card>
            <Card className="bg-gray-500 text-white rounded-xl">
                <h2>Welcome</h2>
                <p>This is the first card</p>
            </Card>
            <Card className="bg-slate-500 text-slate-100 rounded-lg">
                <h1>This is the third card</h1>
                <p>And i will be adding another p tag</p>
                <p>So we can test it if it will work</p>
                <p>And it works!</p>
            </Card>
        </div>
            
        </>
    )
}

export default UserInfo