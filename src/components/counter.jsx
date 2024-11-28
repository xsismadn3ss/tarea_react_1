import { useState } from "react"

function ActionButton({ onclick, text }) {
    return (
        <button className="font-semibold text-gray-600 text-xl rounded-md px-4 transition transition-duration-300 active:bg-gray-200/40 hover:bg-gray-100/40 hover:text-gray-800" onClick={onclick}>
            {text}
        </button>
    )
}

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <>
            <div className="mt-5 pt-2 px-2 pb-2 border-2 rounded-lg bg-gradient-to-r from-indigo-100 via-indigo-300 to-gray-100 shadow-xl">
                <div className="flex justify-center space-x-8 align-middle">
                    <ActionButton onclick={decrement} text={'-'}></ActionButton>
                    <p className="text-gray-600 font-semibold text-xl">{count}</p>
                    <ActionButton onclick={increment} text={'+'}></ActionButton>

                </div>
                <div className="flex justify-center">
                    <ActionButton onclick={reset} text={'RESET'}></ActionButton>
                </div>
            </div>
        </>
    )
}