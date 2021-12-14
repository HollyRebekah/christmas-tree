import { useState } from 'react';

import Bauble from './Bauble';
import FairyLights from './FairyLights';
import './ChristmasTree.css';


const ChristmasTree = () => {
  const [flashing, setFlashing] = useState(false)

  console.log(flashing)

  return (
    <div className='wrapper'>
      <div className='tree-wrapper'>
        <button className="button" onClick={() => setFlashing(!flashing)}>{flashing ? 'Turn off the lights' : 'Turn on the lights'}</button>
        <div className='tree-top'>
          <div className='star-wrapper'>
            <div className='star-top'></div>
            <div className='star-bottom'></div>
          </div>
          <FairyLights flashing={flashing} number={10} />
        </div>

        <div className='tree-middle'>
          <Bauble colour='red' />
          <Bauble colour='blue' />
          <Bauble colour='green' />
          <FairyLights flashing={flashing} number={20} treeLevel='middle' />
        </div>
        <div className='tree-middle tree-middle-2'>
          <Bauble colour='blue' />
          <Bauble colour='green' />
          <Bauble colour='red' />
          <FairyLights flashing={flashing} number={30} treeLevel='middle-2' />
        </div>
        <div className='tree-middle tree-middle-3'>
          <Bauble colour='green' />
          <Bauble colour='red' />
          <Bauble colour='blue' />
          <Bauble colour='green' />
          <FairyLights flashing={flashing} number={40} treeLevel='middle-3' />
        </div>
        <div className='tree-stump'></div>
        <div className='bucket'></div>
      </div>
    </div>
  );
}

export default ChristmasTree;
