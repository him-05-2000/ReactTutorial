const ErrorExample = () => {
  let count = 0;
  let increaseCount = () => {
    count++;
  };

  return (
    <div>
      <h2>Count:{count}</h2>
      <button type="button" onClick={increaseCount} className="btn">
        Click me!!
      </button>
    </div>
  );
};

export default ErrorExample;
