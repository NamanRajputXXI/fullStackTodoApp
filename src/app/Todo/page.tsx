import { auth } from 'auth'
import React from 'react'

const page = async () => {
    const session = await auth();
    if (!session || !session.user) return (
        <div>
            <p>You need to sign in </p>
        </div>
    )
    return (
        <div>
            Create your todo
        </div>
    )
}

export default page
