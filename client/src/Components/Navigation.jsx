import React from 'react'
import { FriendsIcon } from './FriendsIcon'
import { MoneyIcon } from './MoneyIcon'
import { TargetIcon } from './TargetIcon'
import { SettingsIcon } from './SettingsIcon'
import { LogoutIcon } from './LogoutIcon'

const Navigation = () => {
  return (
    <div className="flex flex-col px-6 h-full border-2 border-blue-900">
      <FriendsIcon className="w-8 h-8 mt-24 mb-10  text-blue-500" />
      <MoneyIcon className="w-8 h-8 mb-10 text-blue-500"/>
      <TargetIcon className="w-8 h-8 mb-10 text-blue-500"/>
      <SettingsIcon className="w-8 h-8 mb-10 text-blue-500"/>
      <LogoutIcon className="w-8 h-8 mb-24 text-blue-500"/>
    </div>
  )
}

export default Navigation
