
import React from "react";
export function CreateService() {
    return (
        <>
            <div
                className="container boxed"
                style={{ marginTop: "2%", width: 700, height: "auto" }}
            >
                <h2 style={{ textAlign: "center", marginTop: 20 }}> CREATE NEW SERVICE</h2>
                <div
                    id="form"
                    className="form"
                    style={{ marginLeft: "10%", marginRight: "10%" }}
                >
                    <form action="#" method="POST" noValidate="novalidate">
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Service Type</span>
                            </div>
                            <select className="form-select">
                                <option>Villa</option>
                                <option>House</option>
                                <option>Room</option>
                            </select>
                        </div>
                        <div
                            className="input-group input-group-sm mg"
                            style={{ marginTop: 30 }}
                        >
                            <div className="input-group-prepend">
                                <span className="input-group-text">Service Name</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">User Area</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Rental Cost</span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Max People</span>
                            </div>
                            <input
                                type="number"
                                min={2}
                                max={30}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Rental Type</span>
                            </div>
                            <select className="form-select">
                                <option>Year</option>
                                <option>Month</option>
                                <option>Day</option>
                                <option>Hour</option>
                            </select>
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Room Standard</span>
                            </div>
                            <select className="form-select">
                                <option>Normal</option>
                                <option>Business</option>
                                <option>Presidential</option>
                            </select>
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Other Utilities</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Quantity Of Floor</span>
                            </div>
                            <input
                                type="number"
                                min={1}
                                max={10}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Pool Area</span>
                            </div>
                            <input
                                type="number"
                                min={40}
                                max={1000}
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Free Service Included</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <div className="input-group input-group-sm mg">
                            <div className="input-group-prepend">
                                <span className="input-group-text">URL Image</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </div>
                        <br />
                        <div style={{ textAlign: "center", marginBottom: 30 }}>
                            <button type="submit" className="btn btn-success">
                                ADD
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}