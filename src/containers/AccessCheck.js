import React, { type Node } from 'react';
import { connect } from 'react-redux';
import Login from 'components/Login';
import { bindActionCreators } from 'redux';
import { login } from 'actions/token';

type Props = {
  children: Node,
  token: any,
  loginAction: (username: string, pass: string) => void
}

const AccessCheck = ({ children, token, loginAction }: Props) => {
  if (!token.loaded) {
    return <Login onSubmit={(username, pass) => { loginAction(username, pass); }} error={token.error} />;
  }
  return (
    <div>
      {children}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginAction: bindActionCreators(login, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccessCheck);
