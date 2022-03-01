import { useState, useEffect } from "react";

function Index() {
  const [color1, setColor1] = useState("#18dc53");
  const [color2, setColor2] = useState("#05c1ff");
  let [degree, setDegree] = useState("90");
  const [text, setText] = useState(
    `linear-gradient(45deg, ${color1}, ${color2}) no-repeat center center fixed  `
  );

  useEffect(() => {
    document.body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2}) no-repeat center center fixed`;
    setText(document.body.style.background);
  });

  return (
    <>
      <div className='inputs'>
        <div className='input-1'>
          <label htmlFor='color1'> Color-1 </label>
          <input
            type='color'
            aria-label='color-input-1'
            name='color-1'
            id='color1'
            value={color1}
            onChange={(e) => {
              setColor1(e.target.value);
            }}
          />
        </div>
        <div className='input-2'>
          <label htmlFor='color2'> Color-2 </label>
          <input
            type='color'
            aria-label='color-input-2'
            name='color-2'
            id='color2'
            value={color2}
            onChange={(e) => {
              setColor2(e.target.value);
            }}
          />
        </div>
        <div className='input-3'>
          <label htmlFor='degree'> Degree </label>
          <div>
            <input
              type='range'
              min={0}
              max={359}
              name='degree'
              id='degree'
              value={degree}
              onChange={(e) => {
                setDegree(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <p className='text-wrapper'>
        <span id='text'>background:{text};</span>
        <button
          className='copy'
          onClick={(e) => {
            navigator.clipboard.writeText(
              e.target.previousElementSibling.textContent
            );
          }}>
          Copy to Clipboard
        </button>
      </p>
      <footer>
        <p>
          {" "}
          Made by{" "}
          <a
            href='https://twitter.com/prakhar_369'
            rel='noreferrer'
            target='_blank'>
            {" "}
            Prakhar ❤️
          </a>{" "}
        </p>
      </footer>
    </>
  );
}

export default Index;
