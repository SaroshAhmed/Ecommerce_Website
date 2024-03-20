import React from 'react'
import ComingSoon from '../shared-components/ComingSoon'

const UserProfile = ({userName}) => {
  return (
    <div> User Name=
      {userName}
      <ComingSoon/>
    </div>
  )
}

export default UserProfile