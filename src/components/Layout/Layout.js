import Header from '../Header/Header';

const Layout = ({children, theme, toggleThemeProp}) => {
   return (
      <>
         <Header theme={theme} toggleThemeProp={toggleThemeProp}/>
         {children}
      </>
   )
}

export default Layout;