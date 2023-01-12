export function addFooterLinks() {
    let html = `
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid" style="margin: 15px;">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style="color: white;">About Us</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" style="color: white;">Contact Us</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" style="color: white;">Careers</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" style="color: white;">Partners</a>
                </li>
            </ul>
            </div>
    </div>
  </nav>`;
    
    

  return document.getElementById('footer').innerHTML = html;
}
