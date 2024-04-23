import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()} made with{' '}
        <FavoriteIcon style={{ color: 'red' }} /> by -{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://granada.com.gt/es/"
        >
          Fábrica Granada
        </a>
      </small>
    </footer>
  );
}

export default Footer;
