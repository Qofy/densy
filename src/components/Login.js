import "../styles/login.scss"
import CTA2 from "../images/cta-logo-two.png"

export const Login = (props) => {
  return(
    <section className="login-section">
      <div className="content">
        <div className="densy-logo-1">
          <img className="cta-logo-1" src="/images/cta-logo-one.svg" alt="Densy Logo"/>
          <a href="#">
            <button className="sign-up">
              GET ALL THERE
            </button>
          </a>
          <p className="description">
            Get Premier Access to Raya and Avengers for an additional fee with a Dinsey+ subscription. As of 03/21/25 the price of Dinsey Bundle will increase by $1
          </p>
          <img className="cta-logo-1 " src={CTA2} alt="Densy Logo"/>

        </div>
      </div>
    </section>
  )
}
