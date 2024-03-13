import React, { useState } from 'react'

const Switch = () => {
  const [switchData, setSwitchData] = useState(false)
  const handleSwitch = () => {
    setSwitchData(!switchData)
  }
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={switchData}
        onChange={handleSwitch}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
        Checked switch checkbox input
      </label>
    </div>
  )
}

export default Switch
