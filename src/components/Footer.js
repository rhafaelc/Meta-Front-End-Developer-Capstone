function Footer() {
  return (
    <>
      <img src="../iamges/footer_logo.svg" alt="logo" />
      <div>
        <ul id="doormat-nav">
          <li className="title">Doormat Navigation</li>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a> </li>
          <li><a href="/login">Login</a></li>
        </ul>
        <ul id="contact">
          <li className="title">Contact</li>
          <li><a href="/">Address</a></li>
          <li><a href="/">Phone Number</a></li>
          <li><a href="/">Email</a></li>
        </ul>
        <ul id="social-media-links">
          <li className="title">Social Media Links</li>
          <li><a href="/">Address</a></li>
          <li><a href="/">Phone Number</a></li>
          <li><a href="/">Email</a></li>
        </ul>
      </div>
    </>
  );
}

export default Footer;