export function header() {
    let result = `
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid" style="margin: -15px;">
            <a class="navbar-brand" href="#">
                <img src="assets/images/logo.png" alt="logo" id="nav-logo">
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" style="color: white;">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" style="color: white;">Link</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-info" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>`;

    return document.getElementById('header').innerHTML = result;
}