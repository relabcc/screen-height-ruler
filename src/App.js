import { useState } from 'react';
import Measure from 'react-measure';
import range from 'lodash/range'
import './App.css';

function App() {
  const [size, setSize] = useState()
  return (
    <Measure onResize={({ bounds }) => setSize(bounds)} bounds>
      {({ measureRef }) => (
        <div ref={measureRef} style={{ height: '100%', overflow: 'hidden' }}>
          {size && size.height && (
            <>
              {range(0, Math.floor(size.height), 50).map(d => (
                <div key={d} style={{ height: 50 }} className={`tick ${d % 100 === 0 && 'major'}`}>
                  {d > 0 && <div className="label">{d}px</div>}
                </div>
              ))}
              <div className="size">{Math.floor(size.width)}px x {Math.floor(size.height)}px</div>
            </>
          )}
        </div>
      )}
    </Measure>
  );
}

export default App;
