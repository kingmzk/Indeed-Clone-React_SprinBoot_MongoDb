import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../Routes/route";

const StyledAppBar = styled(AppBar)({
  background: '#2d2d2d',
  height: 64,
  '& > div > *':
  {
    'textDecoration' : 'none',
    'color':'inherit',
    'marginRight': 20,
    'fontSize': 14
  }
})

const Header = () => {
  const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
  return (
    <div style={{ position: 'fixed' }}>
      <StyledAppBar>
        <Toolbar>
          <Link to={routePath.home}>   <img src={logo} alt="logo" style={{ width: 95, marginBottom: 6 }} />   </Link>
          <Link to={routePath.create}> Post a Job</Link>
          <Link to={routePath.posts}> Find a Job</Link>
        </Toolbar>
      </StyledAppBar>
      <p> this is Header </p>
    </div>
  );
};

export default Header;
