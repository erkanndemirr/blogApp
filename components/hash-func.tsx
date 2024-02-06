import React from 'react'

import { hash } from 'bcrypt'

const HashFunc = async ({password}: {
    password: string;
}) => {
    const hashpass =  await hash(password, 10)
  return (
    <div>
      {hashpass}
    </div>
  )
}

export default HashFunc