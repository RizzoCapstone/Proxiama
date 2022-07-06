import { useDispatch, useSelector } from 'react-redux';
import { getSingleSystemByName } from '../store/system';
import { useEffect, useState } from 'react';
import { getaAllSystems } from '../store/allSystems';

export default function Test(props) {
  const dispatch = useDispatch();
  const system = useSelector((state) => state.singleSystem || {});
  const systems = useSelector((state) => state.allSystems || []);
  // const [systemData, setSystemData] = useState([]);

  useEffect(() => {
    dispatch(getSingleSystemByName('a'));
    // dispatch(getaAllSystems());
  }, []);
  console.log(system);
  const singleSystem = system || {};
  return (
    <div>
      <h1>hello</h1>
      <p>{singleSystem.planetName}</p>
    </div>
  );
}
