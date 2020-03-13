class User extends React.Component {
    render() {
      const {avatar_url, html_url, login} = this.props.user;
      return (
        <div className="user">
          <img src={avatar_url} style={{ maxWidth: "100px" }} />
          <a href={html_url} target="_blank">
            {login}
          </a>
        </div>
      );
    }
  }


export default User