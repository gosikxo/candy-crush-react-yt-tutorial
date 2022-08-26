import { useEffect, useState } from "react";

const width = 8;
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
];

function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < 64; i++) {
      const randomNumberFrom0To5 = Math.floor(Math.random() * candyColors.length);
      const randomColor = candyColors[randomNumberFrom0To5];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  }

  useEffect(() => {
    createBoard()
  }, []);

  console.log(currentColorArrangement)

  return (
    <div>

    </div>
  );
}

export default App;
