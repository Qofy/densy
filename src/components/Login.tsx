import "../styles/login.scss"

export const Login = () => {
  
  return(
    <section className="login-section">
      <div className="content">
        <div className="densy-logo-1">
          <img className="cta-logo-1" src="/images/cta-logo-one.svg" alt="Densy Logo"/>
          <a href="#" role="button">
            <button className="sign-up">
              GET ALL THERE
            </button>
          </a>
          <p className="description">
            Get Premier Access to Raya and Avengers for an additional fee with a Disney+ subscription. As of 03/21/25 the price of Disney Bundle will increase by $1
          </p>               
        </div>
      </div>
    </section>
  )
}
