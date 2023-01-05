import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from './actions';
import UserCard from './UserCard';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  handleClick = (id) => {
    this.props.fetchUser(id);
  }

  render() {
    return (
      <div className="app">
        <div className="card-and-buttons">
          {this.props.loading ? <p>Loading...</p> : this.props.user.id ? <UserCard user={this.props.user} /> : <p>Click on a button to fetch a user.</p>}
          <div className="button-container">
            {[...Array(this.props.total)].map((_, i) => (
              <button key={i} onClick={() => this.handleClick(i + 1)}>{i + 1}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    user: state.user,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  fetchUsers,
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);






