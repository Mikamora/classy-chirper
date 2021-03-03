import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUsername: "",
            newMsg: "",
            chirps: [
                {
                    username: 'gatorsfan-40',
                    message: 'I love that team',
                    createdAt: `${new Date('2021-02-27T05:30:15.284Z').toLocaleString()}`,
                },
                {
                    username: 'bingcrosbyfan-3000',
                    message: 'That teams not as good as my man Bing',
                    createdAt: `${new Date('2021-02-27T05:30:15.284Z').toLocaleString()} `,
                },
                {
                    username: 'bigchillin-guy',
                    message: 'Sometimes its good to just realx',
                    createdAt: `${new Date('2021-02-22T13:33:15.284Z').toLocaleString()} `,
                },
            ]
        }
        this.submitChirp = this.submitChirp.bind(this);
        this.emptyInputs = this.emptyInputs.bind(this);
    }


    submitChirp() {
        let d = new Date();

        let newChirp = {
            username: this.state.newUsername,
            message: this.state.newMsg,
            createdAt: d.toLocaleString(),
        };

        this.setState({ chirps: [...this.state.chirps, newChirp] });
        this.emptyInputs();
    }

    emptyInputs() {
        this.setState({ newUsername: '' });
        this.setState({ newMsg: '' });
    };

    render() {
        return (
            <>
                <div className="row-lg-12 mb-4 p-3 bg-light">
                    <h1>Chirpr</h1>
                </div>

                <div className="row-md m-6 d-flex align-items-start">
                    <div id="input-box" className="col-md-3 p-4 bg-light shadow">
                        <div className="input-group input-group-sm">
                            <span className="input-group-text">
                            </span>
                            <input
                                className="form-control"
                                type="text"
                                id="un-input"
                                value={this.state.newUsername}
                                placeholder="Username"
                                onChange={(e) => this.setState({ newUsername: e.target.value })}
                            ></input>
                        </div>

                        <div className="input-group input-group-sm">
                            <span className="input-group-text">
                            </span>

                            <textarea
                                className="form-control"
                                type="text"
                                id="msg-input"
                                value={this.state.newMsg}
                                placeholder="What's on your mind?"
                                onChange={(e) => this.setState({ newMsg: e.target.value })}
                            ></textarea>
                        </div>
                        <button className="btn btn-primary" onClick={this.submitChirp}>
                            Submit chirp
          </button>
                    </div>
                    <div id="chirp-box" className="col-md-4 rounded shadow">
                        {this.state.chirps.map(yes => (
                            <div className="bg-light card border-0">
                                <div className="card-body">
                                    <h5 className="card-title">{yes.username}</h5>
                                    <p className="card-text">{yes.message}</p>
                                    <p className="text-muted">{yes.createdAt}</p>
                                    <hr></hr>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </>
        );
    }
};

export default App;