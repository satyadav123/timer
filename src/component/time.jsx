import { useState, useEffect } from "react";

function Timer({ start, end }) {
  const [time, setTime] = useState(+start);
//   end = +end -1
  useEffect(() => {
    let id = setInterval(() => {
      setTime((prevValue) => {
        if (prevValue+1 === +end) {
          clearInterval(id);
        }
        return prevValue + 1;
      });
    }, 500);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="time">
      <p>
        Start--time : <span>{start}</span> End--time:  <span>{end}</span>
      </p>
      <h2>{time}</h2>
    </div>
  );
}

export default Timer;