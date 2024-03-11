import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="mt-6 ml-6">
        <img src="../../public/logo_64.png" alt="logo" />
      </div>

      <div className="flex justify-evenly mt-6 mr-6">
        <div className="m-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" /></svg>
        </div>
        <div className="m-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2V2h3v2.2q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6q-1.65 0-2.825 1.175T8 10z"/></svg>
        </div>
      </div>
    </div>
  )
}

export default Header
