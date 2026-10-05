const PropDrill = ({user, setpropdrill}) => {

  return (
    <div>
        <h1>=====From Prop Drill=====</h1>
      <h1>Welcome, {user}!</h1>
      <button onClick={() => setpropdrill("John Doe")}>Login</button>
    </div>
  );
};
export default PropDrill;