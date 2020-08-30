import React, { useState } from 'react'

function Jenosize() {
  const [result, setResult] = useState(0)

  const onChange = (e) => {
    if (!e.target.value) {
      setResult(0)
    } else {
      setResult(xyz(e.target.value))
    }
  }

  const xyz = (position) => {
    let result = 3
    for (let i = 1; i <= position; i++) {
      result += 2 * i
    }
    return result
  }

  const x = xyz(4)
  const y = xyz(5)
  const z = xyz(6)

  return (
    <div className="text-center pt-5">
      <h2>3, 5, 9, 15, X, Y, Z</h2>
      <h3>
        X = {x}, Y = {y}, Z = {z}
      </h3>
      <h2 className="mt-5">Test Solution</h2>
      <div className="d-flex justify-content-center">
        <h3>Position: </h3>
        <input className="mx-3" type="number" onChange={onChange}></input>
      </div>
      <h3>result = {result}</h3>
    </div>
  )
}

export default Jenosize
