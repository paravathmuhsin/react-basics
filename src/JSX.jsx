function JSX() {
  const name = "David";
  const ar = [3,6,9, <h3>Hello</h3>]
  return (
    <div>
      <h2>
        JSX - {name} - {8 + 6} - {ar}
      </h2>
      <a href="" className={name} htmlFor="dd">Hiiii</a>
    </div>
  );
}

export default JSX;
