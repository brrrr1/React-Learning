function login(props) {

    const user = {
        username: 'cr7',
        email: 'cr7@gmail.com'
    }

    const handleClick = () => {
        props.handleLogin(user)
    }

  return (
    <section>
        <h2>Login section</h2>
        <button onClick={handleClick}>Login</button>
    </section>
  )
}

export default login;