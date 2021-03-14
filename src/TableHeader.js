const headerData = [
  {
    Header: () => <div className="table-header">Name (Username)</div>,
    accessor: "name",
    Cell: props => (
      <span>
        <div className="contact-name">{props.row.original.name}</div>
        <div className="cell-content cell">@{props.row.original.username}</div>
      </span>
    ),
  },
  {
    Header: () => <div className="table-header">Contact Details</div>,
    accessor: "email",
    Cell: props => (
      <span>
        <div className="cell-content">{props.row.original.email}</div>
        <div className="cell-content cell">{props.row.original.phone}</div>
      </span>
    ),
    disableSortBy: true,
  },
  {
    Header: () => <div className="table-header">Website</div>,
    accessor: "website",
    Cell: props => (
      <span className="cell-content cell">
        <div>{props.row.original.website}</div>
      </span>
    ),
    disableSortBy: true,
  },
  {
    Header: () => <div className="table-header">Address</div>,
    accessor: "address.city",
    Cell: props => (
      <span>
        <div className="cell-content">
          {props.row.original.address.suite +
            " " +
            props.row.original.address.street}
        </div>
        <div className="cell-content cell">
          {props.row.original.address.city}
        </div>
      </span>
    ),
    disableSortBy: true,
  },
  {
    Header: () => <div className="table-header">Company</div>,
    accessor: "company.name",
    Cell: props => (
      <span className="cell-content cell">
        <div>{props.row.original.company.name}</div>
      </span>
    ),
    disableSortBy: true,
  },
];

export default headerData;
