/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from './canvas';
import SectionWrapper from '../hoc';
import { technologies } from '../constants';
import {Canvas} from '@react/three-fiber'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        return (
          <div className="w-28 h-28" key={technology.name}>
            <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
            <BallCanvas icon={technology.icon} />
              </Canvas>
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, '');
