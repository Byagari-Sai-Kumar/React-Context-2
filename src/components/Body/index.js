import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="bodyOverallContainer">
          {showLeftNavbar ? (
            <div className="LeftNavbarMenuContainer">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="unorderedListItems">
                <li className="listItem">Item 1</li>
                <li className="listItem">Item 2</li>
                <li className="listItem">Item 3</li>
                <li className="listItem">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="LeftNavbarMenuContainer">
              <h1 className="heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectutur adisciping elit sed do
                emuliteing temper ut emerure laboror et dolor Ut enim and minim
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="LeftNavbarMenuContainer">
              <h1 className="heading">Right Navbar</h1>
              <div className="unorderedListItems2">
                <div className="adContainer">
                  <p className="adItem">Ad 1</p>
                </div>
                <div className="adContainer">
                  <p className="adItem">Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
