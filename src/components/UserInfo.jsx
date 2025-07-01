import { useState } from "react"
import DisplayMessage from "./DisplayMessage";
import InputName from "./InputName";

const UserInfo = () => {
    const [name, setName] = useState('');
    return (
        <>
            <InputName name={name} setName={setName} />
            <DisplayMessage name={name} />
        </>
    )
}

export default UserInfo