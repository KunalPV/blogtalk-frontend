import './header.css';

export default function header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-lg">Everything Blog.</span>
        <span className="header-title-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className="header-img-bkg">
        <img
          className="header-img"
          src="https://images.unsplash.com/photo-1511140973288-19bf21d7e771?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
