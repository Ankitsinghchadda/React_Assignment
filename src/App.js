import { useEffect, useState } from 'react';
import './App.css';
import userData from "./data.json"
import User from './User';
function App() {
  const [data, setData] = useState([])
  const [tsbl, setTsbl] = useState({})
  const updatedJsonData = []
  const TotalStakedByLevel = {}
  const updateData = (l_data, level = 0) => {
    l_data.map((user) => {
      if (user.total_childs !== 0) {
        updateData(user.deep_childrens, level + 1)
      }
      let total_staked = 0;
      user.pools.map((pool) => {
        total_staked += parseInt(pool.staked_amount)
      })
      user["level"] = level
      TotalStakedByLevel[level] = TotalStakedByLevel[level] ? TotalStakedByLevel[level] + total_staked : total_staked;
      user["total_staked"] = total_staked
      updatedJsonData.push(user)
    })
  }

  const users = data.map((user, index) => {
    return <User address={user.address} level={user.level} total_staked={user.total_staked} key={user.address + index} />
  })

  const totalStakedByLevelDiv = Object.entries(tsbl).map(([level, staked]) => {
    const select = document.querySelector('select');
    if (select.options.length <= Object.entries(tsbl).length) {
      select.options.add(new Option(`Level ${level}`, `${level}`))
    }
    return <h3 key={level + staked}>Level {level} : {staked}</h3>

  })

  const ApplyFilter = (e) => {
    const select = document.querySelector('select');
    var option = select.options[select.selectedIndex];
    updateData(userData)
    if (option.value !== "default") {

      const currentData = []
      updatedJsonData.map((user) => {
        if (user.level == option.value) {
          currentData.push(user)
        }
      })
      setData(currentData)
    }
    else {
      setData(updatedJsonData)
    }
  }

  useEffect(() => {

    updateData(userData)
    setData(updatedJsonData)
    setTsbl(TotalStakedByLevel)
  }, [])
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}> React Assignment </h1>

      <div className='filter_Buttons'>
        <h3>Filter By :</h3>
        <select onChange={ApplyFilter} className="filter_select">
          <option value={"default"}>No filter</option>
        </select>
      </div>

      <div className='totalStakedByLevel'>
        {totalStakedByLevelDiv}
      </div>
      <div className='users'>
        {users}
      </div>

    </div>
  );
}

export default App;
