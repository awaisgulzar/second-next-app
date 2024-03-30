"use client"
import {useRouter} from "next/navigation"
export default function Name(){
    let router = useRouter();
    return (
        <main>
            <button onClick={()=>router.back()}>Go to back</button>
        </main>
    )
}