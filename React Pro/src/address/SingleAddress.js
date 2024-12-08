const SingleAddress = ({ address, addressDelete }) => {
  console.log(address);

  return (
    <div className="col-12 mt-3">
      <div className="card">
        <div className="card-body">
          <div>
            {address.flat}, {address.city}, {address.state}, {address.country} -{" "}
            {address.pincode}
          </div>
          <div>
            Name: {address.name}, Contact Number: {address.mobile}
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Edit</button>{" "}
          <button
            className="btn btn-danger"
            onClick={(e) => addressDelete(address.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAddress;
