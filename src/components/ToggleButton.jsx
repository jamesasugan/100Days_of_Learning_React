import { useToggle } from "./useToggle"

const ToggleButton = () => {
    const [isDarkMode, toggleDarkMode] = useToggle(false, "darkMode");
    
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <button className="btn btn-info" onClick={toggleDarkMode}>
                {isDarkMode ? "Dark Mode On" : "Dark Mode Off"}
            </button>
        </div>
    )
}

export default ToggleButton