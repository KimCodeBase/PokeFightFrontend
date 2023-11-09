// import "./App.css";
// import { useState, useEffect } from "react";
//
// function App() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [pokemonSprites, setPokemonSprites] = useState({});
//   useEffect(() => {
//     const apiData = async () => {
//       try {
//         const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
//         if (!getData.ok) {
//           throw new Error("The request is failed" + getData.status);
//         }
//         const response = await getData.json();
//         console.log(response.results);
//         console.log(response.results);
//         setPokemonData(response.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     apiData();
//   }, []);
//
//   useEffect(() => {
//     const getData = async () => {
//       const spriteData = {};
//       for (let pokemon of pokemonData) {
//         const fetchData = await fetch(pokemon.url);
//         const data = await fetchData.json();
//         console.log(data);
//         spriteData[pokemon.name] = data.sprites.front_default;
//         console.log(spriteData[pokemon.name]);
//       }
//       setPokemonSprites(spriteData);
//     };
//     getData();
//   });
//   return (
//     <>
//       {pokemonData.map((pokemon) => {
//         return (
//           <>
//             <p>{pokemon.name}</p>
//             <img
//               src={pokemonSprites[pokemon.name]}
//               alt=""
//               style={{ width: "100px", height: "100px" }}
//             />
//           </>
//         );
//       })}
//     </>
//   );
// }
//
// export default App;

// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import NavBar from "./NavBar";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import "../styles/style.css";
// import { Routes, Route } from "react-router-dom";
// const Main = () => {
//   const [pokeData, setPokeData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
//
//
//   const [nextUrl, setNextUrl] = useState();
//   const [prevUrl, setPrevUrl] = useState();
//   const [pokeDex, setPokeDex] = useState();
//
//   const pokeFun = async () => {
//     setLoading(true);
//     const res = await axios.get(url);
//     setNextUrl(res.data.next);
//     setPrevUrl(res.data.previous);
//     getPokemon(res.data.results);
//     setLoading(false);
//   };
//   const getPokemon = async (res) => {
//     res.map(async (item) => {
//       const result = await axios.get(item.url);
//       setPokeData((state) => {
//         console.log(state);
//         state = [...state, result.data];
//         state.sort((a, b) => (a.id > b.id ? 1 : -1));
//         return state;
//       });
//     });
//   };
//   useEffect(() => {
//     pokeFun();
//   }, [url]);
//   return (
//     <>
//       <NavBar />
//       <div className="container">
//         <div className="left-content">
//           <Card
//             pokemon={pokeData}
//             loading={loading}
//             infoPokemon={(poke) => setPokeDex(poke)}
//           />
//
//           <div className="btn-group">
//             {prevUrl && (
//               <button
//                 onClick={() => {
//                   setPokeData([]);
//                   setUrl(prevUrl);
//                 }}
//               >
//                 Previous
//               </button>
//             )}
//
//             {nextUrl && (
//               <button
//                 onClick={() => {
//                   setPokeData([]);
//                   setUrl(nextUrl);
//                 }}
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </div>
//         <div className="right-content">
//           <Pokeinfo data={pokeDex} />
//         </div>
//       </div>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </>
//   );
// };
// export default Main;
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "./Home";
import NavBar from "./NavBar";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
