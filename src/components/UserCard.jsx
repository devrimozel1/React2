import React from 'react'

function UserCard({ name, info, message, color }) {

  return (
    <div style={{ width: 300, height: 300, border: "1px solid black", borderRadius: "10", textAlign: "center", display: "flex", flexDirection: "column", gap: 5, backgroundColor: color,}}>
      <h2>{name}</h2>
      <div className="second" style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 100, height: 100, borderRadius: "50%", border: "3px solid black" }}></div>
        <div className="desc">
          <p>{info}</p>
        </div>
      </div>
      <div className="message">
        <h3>{message}</h3>
      </div>
      <div className="buttons" style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center" }}>
        <button className="red" style={{ border: "2px solid red" }}>Red</button>
        <button className="kabul" style={{ border: "2px solid green" }}>Kabul Et</button>
      </div>
    </div >

  )
}

export default UserCard