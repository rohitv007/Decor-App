import { Modal } from 'react-bootstrap';
import React from 'react'

function Cookie() {

    const [showModal, setshowModal] = React.useState(false);

    // const handleClose = () => setshowModal(false);
    // const handleShow = () => setshowModal(true);

    React.useEffect(() => {
        setshowModal(true);
    }, []);

    let myCookies = {};

    const inputName = React.useRef(null);
    const inputMail = React.useRef(null);
    const inputNum = React.useRef(null);

    const saveCookies = () =>
    {
        const name = myCookies["name"] = inputName.current.value.trim();
        const email = myCookies["email"] = inputMail.current.value.trim();
        const mobile = myCookies["mobile"] = inputNum.current.value.trim();


        if( name && email && mobile ) {

            document.cookie = "";
            var today = new Date().getFullYear();
            var expireDate = today + 100;
            var cookieString = "";        
            for (var key in myCookies)
            {
                cookieString = key+"="+myCookies[key]+";"+expireDate+";";
                if (cookieString !== ";") {
                    document.cookie = cookieString;
                    setshowModal(false);
                }
            }
            // console.log(document.cookie);
        }
        else {
            alert("No empty values allowed");
        }
    }

    return (
        <div>
            <Modal show={showModal} backdrop="static" keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>Cookie Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>    
                    <form>
                        <div className="form-group row">
                            <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input ref={inputName} type="text" className="form-control" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input ref={inputMail} type="email" className="form-control" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Mobile" className="col-sm-2 col-form-label">Mobile</label>
                            <div className="col-sm-10">
                                <input ref={inputNum} type="tel" className="form-control" required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button style={{boxShadow: 'none', border: 'none', outline: 'none'}} onClick={saveCookies} type="submit" className="btn btn-success">Save</button>
                            {/* <button onClick={loadCookies} type="button" className="btn btn-secondary">Load</button> */}
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Cookie
