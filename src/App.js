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

  const checkForColumnOfThree = () => {
    for(let i = 0; i<47; i++) {
      const columnOfThree =  [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];

      if(columnOfThree.every(number => currentColorArrangement[number] === decidedColor)) {
        columnOfThree.forEach(number => currentColorArrangement[number] = '' )
      }
    }
  }

  const checkForRowOfThree = () => {
    for(let i = 0; i < 64; i++) {
      const rowOfThree =  [i, i + 1, i +2];
      const decidedColor = currentColorArrangement[i];
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

      if (notValid.includes(i)) continue

      if(rowOfThree.every(number => currentColorArrangement[number] === decidedColor)) {
        rowOfThree.forEach(number => currentColorArrangement[number] = '' )
      }
    }
  }
 

  const checkForColumnOfFour = () => {
    for(let i = 0; i< 39; i++) {
      const columnOfFour =  [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentColorArrangement[i];

      if(columnOfFour.every(number => currentColorArrangement[number] === decidedColor)) {
        columnOfFour.forEach(number => currentColorArrangement[number] = '' )
      }
    }
  }

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

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)
    return () => clearInterval(timer)
  }, [checkForColumnOfFour, checkForColumnOfThree, checkForRowOfThree, currentColorArrangement])

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key={index}
            style={{ backgroundColor: candyColor }}
            alt={candyColor}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
