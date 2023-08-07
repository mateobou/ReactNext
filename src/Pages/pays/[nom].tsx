import { useRouter } from "next/router"
import { useEffect } from "react"

import { useState } from "react";

export default function uniquePays(){
    const router = useRouter()
    const {name} = router.query
    return(
        <>
            <h1>{name}</h1>
        </>

    )
}