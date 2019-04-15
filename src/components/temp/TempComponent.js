import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import logo from '../../logo.svg';
// actions
import { getUsers } from '../../actions/TempAction';

class TempComponent extends Component {
  state = {
    loading: true,
}

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    await this.props.getUsers();
    this.setState({loading:false});
  }

  render() {
    const { loading } = this.state;
    const { users } = this.props;
    return (
        <div>
           <div className="has-text-center">
            <img src={logo} width="100px" alt="logo"/>
            <h3>React | Redux | Sass | Thunk | Axios | React-Router | Protected Routes | Jest</h3>
            <p><u>Data from GET API</u></p>
           </div>
            {!loading ? users.map((user, index) => (
                <p className={classnames('has-text-center', {'is-bold': index % 2 === 0})}>{user.name}</p>
            )) : <p className="has-text-center">loading...</p>}
        </div>
    )
  }
}

// PropTypes
// ---------
TempComponent.propTypes = {
    users: PropTypes.array.isRequired,
}

// Map Redux state to props
// ------------------------
const mapStateToProps = (state) => ({
    users: state.users.users,
})

export default connect(mapStateToProps, { getUsers })(TempComponent);