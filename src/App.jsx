
import './App.css'

function App() {

  let users = [
    {
      name: "Devrim",
      surname: "Özel",
      age: 29,
      isLogin: true,
    },
    {
      name: "Bedir",
      surname: "Öner",
      age: 33,
      isLogin: true,
    },
    {
      name: "Cansu",
      surname: "Ak",
      age: 29,
      isLogin: false,
    },
    {
      name: "Devrim",
      surname: "Özel",
      age: 29,
      isLogin: true,
    },
    {
      name: "Bedir",
      surname: "Öner",
      age: 33,
      isLogin: true,
    },
    {
      name: "Cansu",
      surname: "Ak",
      age: 29,
      isLogin: false,
    },
    {
      name: "Devrim",
      surname: "Özel",
      age: 29,
      isLogin: true,
    },
    {
      name: "Bedir",
      surname: "Öner",
      age: 33,
      isLogin: true,
    },
    {
      name: "Cansu",
      surname: "Ak",
      age: 29,
      isLogin: false,
    },

  ]

  return (
    <div className='bodydiv'>
      {
        users.map((user, index) => (
          <div key={index} className='karts'
            style={user.isLogin
              ? { border: "1px solid black"}
              : { border:"2px solid red"}}>
            <h2> Kullanıcı Adı : {user.name}</h2>
            <h2> Kullanıcı Soyadı : {user.surname}</h2>
            <h2> Kullanıcı Yaşı : {user.age}</h2>


          </div>

        ))
      }

    </div>

  )
}

export default App
