
import './App.css'
import UserCard from './components/UserCard'

function App() {

  // let users = [
  //   {
  //     name: "Devrim",
  //     surname: "Özel",
  //     age: 29,
  //     isLogin: true,
  //   },
  //   {
  //     name: "Bedir",
  //     surname: "Öner",
  //     age: 33,
  //     isLogin: true,
  //   },
  //   {
  //     name: "Cansu",
  //     surname: "Ak",
  //     age: 29,
  //     isLogin: false,
  //   },
  //   {
  //     name: "Devrim",
  //     surname: "Özel",
  //     age: 29,
  //     isLogin: true,
  //   },
  //   {
  //     name: "Bedir",
  //     surname: "Öner",
  //     age: 33,
  //     isLogin: true,
  //   },
  //   {
  //     name: "Cansu",
  //     surname: "Ak",
  //     age: 29,
  //     isLogin: false,
  //   },
  //   {
  //     name: "Devrim",
  //     surname: "Özel",
  //     age: 29,
  //     isLogin: true,
  //   },
  //   {
  //     name: "Bedir",
  //     surname: "Öner",
  //     age: 33,
  //     isLogin: true,
  //   },
  //   {
  //     name: "Cansu",
  //     surname: "Ak",
  //     age: 29,
  //     isLogin: false,
  //   },

  // ]

  let infos = [
    {
      name: "Devrim",
      surname: "Özel",
      info: "Yazılımcı",
      message: "Are u Join ? ",
      color: "green"
    },
    {
      name: "Bedir",
      surname: "Kaan",
      info: "Yazılımcı",
      message: "Are u Join ? ",
      color: "blue"
    },
    {
      name: "Bedir",
      surname: "Kaan",
      info: "Yazılımcı",
      message: "Are u Join ? ",
      color: "red"
    },
    
  ]

  return (
    // <div className='bodydiv'>
    //   {
    //     users.map((user, index) => (
    //       <div key={index} className='karts'
    //         style={user.isLogin
    //           ? { border: "1px solid black" }
    //           : { border: "2px solid red" }}>
    //         <h2> Kullanıcı Adı : {user.name}</h2>
    //         <h2> Kullanıcı Soyadı : {user.surname}</h2>
    //         <h2> Kullanıcı Yaşı : {user.age}</h2>
    //         <h2>Kullanıcı Status : {user.isLogin ? "Kayıtlı" : "Kayıtlı Değil"}</h2>
    //       </div>
    //     ))
    //   }
    // </div>
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:30}}>

      {infos.map((user, index) => (
        <UserCard
          key={index}
          name={user.name + " " + user.surname}
          info={user.info}
          message={user.message}
          color={user.color}
        />
      ))}

    </div>




  )
}

export default App
