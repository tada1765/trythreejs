// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import * as THREE from 'three'
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from '@react-three/cannon'
// import './App.css';

function Box(props) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0,3,0] }));
  return (
    <mesh 
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref} 
      position={[0,2,0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0] 
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100,100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10,15,10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}



