function LoginPage() {
    const [isLoginFormLeft, setIsLoginFormLeft] = useState(false);
  
    function handleMoveLoginFormLeft() {
      setIsLoginFormLeft(true);
    }
  
    return (
      <div>
        <form id="login-form" className={isLoginFormLeft ? 'left' : ''}>
          {/* Login form fields */}
        </form>
        <button onClick={handleMoveLoginFormLeft}>Move form left</button>
      </div>
    );
  }
  