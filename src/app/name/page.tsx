"use client"
import {useRouter} from "next/navigation"
export default function Name(){
    let router = useRouter();
    return (
        <main>
            <button onClick={()=>router.back()}>Go to back</button>
            <h1>Hello, I am Muhammad Awais and this is my first Next.js project.</h1>
        </main>
    )
}