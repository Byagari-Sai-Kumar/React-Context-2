import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configContainer">
          <h1 className="layoutHeading">Layout</h1>
          <div className="inputOverallContainer">
            <input
              type="checkbox"
              id="content"
              className="checkBoxStyle"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="inputOverallContainer">
            <input
              type="checkbox"
              id="leftNavbar"
              className="checkBoxStyle"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="inputOverallContainer">
            <input
              type="checkbox"
              id="rightNavbar"
              className="checkBoxStyle"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="rightNavbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
