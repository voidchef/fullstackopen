const successStyle = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderColor: "green",
  borderRadius: 5,
  padding: 10,
  margin_bottom: 10,
};

const errorStyle = {
  color: "red",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderColor: "red",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  if (message.includes("ERROR")) {
    return (
      <div style={errorStyle} className="message">
        {message}
      </div>
    );
  } else {
    return (
      <div style={successStyle} className="message">
        {message}
      </div>
    );
  }
};

export default Notification;
