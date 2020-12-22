function GraphContainer(props) {
  return (
    <div className="compact-container-img">
      <img className="Logo" src={process.env.PUBLIC_URL + "/GraphPlaceHolder.png"} alt="logo" />
    </div>
  );
}

// Export function
export default GraphContainer;