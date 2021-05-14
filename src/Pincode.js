import './Pincode.css';

const Pincode = (props) => {
    const dStatus = props.DeliveryStatus;
    let output = null;
    if (dStatus === 'Delivery') {
        output = (
            <div className="success card">
                <p className="card-title">{ props.Name }</p>
                <p>{ props.BranchType }</p>
                <p>Block: { props.Block }<br />
                Division: { props.Division }<br />
                District: { props.District }<br />
                Region: { props.Region }<br />
                    { props.State } ({ props.Country }) <br />
                DeliveryStatus: { props.DeliveryStatus }
                </p>
            </div>
        )
    } else {
        output = (
            <div className="danger card">
                <p className="card-title">{ props.Name }</p>
                <p>{ props.BranchType }</p>
                <p>Block: { props.Block }<br />
                Division: { props.Division }<br />
                District: { props.District }<br />
                Region: { props.Region }<br />
                    { props.State } ({ props.Country }) <br />
                DeliveryStatus: { props.DeliveryStatus }
                </p>
            </div>
        )
    }
    return (
        <div key={ props.Name } id="main">
            {output }
        </div>
    )
}

export default Pincode;