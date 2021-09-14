import { useState } from 'react';
import Measure from 'react-measure';
import range from 'lodash/range'
import './App.css';

function App() {
  const [size, setSize] = useState()
  const [x2, setX2] = useState()
  const [vh, setVh] = useState()
  return (
    <Measure onResize={({ bounds }) => setSize(bounds)} bounds>
      {({ measureRef }) => (
        <div ref={measureRef} style={{ height: `${x2 ? 2 : 1}00${vh ? 'vh' : '%'}`, overflow: 'hidden', backgroundColor: 'beige' }}>
          {size && size.height && (
            <>
              {range(0, Math.floor(size.height), 50).map(d => (
                <div key={d} style={{ height: 50 }} className={`tick ${d % 100 === 0 && 'major'}`}>
                  {d > 0 && <div className="label">{d}px</div>}
                </div>
              ))}
              <div className="size">
                <label>
                  <input type="checkbox" name="x2" onChange={(e) => setX2(e.target.checked)} checked={x2} />
                  2x height
                </label>
                <label>
                  <input type="checkbox" name="vh" onChange={(e) => setVh(e.target.checked)} checked={vh} />
                  use vh
                </label>
                {Math.floor(size.width)}px x {Math.floor(size.height)}px
              </div>
            </>
          )}
        </div>
      )}
    </Measure>
  );
}

export default App;
