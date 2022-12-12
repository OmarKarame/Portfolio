import './Header.scss';

const Header = ({ mainHeader, secondaryHeader, headerClassName }) => {
  return (
    <div className={headerClassName}>
        <h1>{mainHeader}</h1>
        <h6>{secondaryHeader}</h6>
    </div>
  )
}

export default Header