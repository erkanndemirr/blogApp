import User from "@/components/Create/User"

export default function page({params}:{
    params : {username : string}
}) {
    return <main>
        <User/>
    </main>
}