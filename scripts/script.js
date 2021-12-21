var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
var notificationPlaceholder = document.getElementById('liveNotificationPlaceholder')
var notTrigger = document.getElementById('liveNotBtn')
var notificationPlaceholder2 = document.getElementById('liveNotificationPlaceholder2')
var notTrigger2 = document.getElementById('liveNotBtn2')
var notificationPlaceholder3 = document.getElementById('liveNotificationPlaceholder3')
var notTrigger3 = document.getElementById('liveNotBtn3')
var notificationPlaceholder4 = document.getElementById('liveNotificationPlaceholder4')
var notTrigger4 = document.getElementById('liveNotBtn4')
var notificationPlaceholder5 = document.getElementById('liveNotificationPlaceholder5')
var notTrigger5 = document.getElementById('liveNotBtn5')
var notificationPlaceholder6 = document.getElementById('liveNotificationPlaceholder6')
var notTrigger6 = document.getElementById('liveNotBtn6')
var notificationPlaceholder7 = document.getElementById('liveNotificationPlaceholder7')
var notTrigger7 = document.getElementById('liveNotBtn7')
var notificationPlaceholder8 = document.getElementById('liveNotificationPlaceholder8')
var notTrigger8 = document.getElementById('liveNotBtn8')
var notificationPlaceholder9 = document.getElementById('liveNotificationPlaceholder9')
var notTrigger9 = document.getElementById('liveNotBtn9')
var notificationPlaceholder10 = document.getElementById('liveNotificationPlaceholder10')
var notTrigger10 = document.getElementById('liveNotBtn10')
var notificationPlaceholder11 = document.getElementById('liveNotificationPlaceholder11')
var notTrigger11 = document.getElementById('liveNotBtn11')
var notificationPlaceholder12 = document.getElementById('liveNotificationPlaceholder12')
var notTrigger12 = document.getElementById('liveNotBtn12')
var notificationPlaceholder13 = document.getElementById('liveNotificationPlaceholder13')
var notTrigger13 = document.getElementById('liveNotBtn13')
var notificationPlaceholder14 = document.getElementById('liveNotificationPlaceholder14')
var notTrigger14 = document.getElementById('liveNotBtn14')
var notificationPlaceholder15 = document.getElementById('liveNotificationPlaceholder15')
var notTrigger15 = document.getElementById('liveNotBtn15')
var notificationPlaceholder16 = document.getElementById('liveNotificationPlaceholder16')
var notTrigger16 = document.getElementById('liveNotBtn16')
var notificationPlaceholder17 = document.getElementById('liveNotificationPlaceholder17')
var notTrigger17 = document.getElementById('liveNotBtn17')
var notificationPlaceholder18 = document.getElementById('liveNotificationPlaceholder18')
var notTrigger18 = document.getElementById('liveNotBtn18')
var notificationPlaceholder19 = document.getElementById('liveNotificationPlaceholder19')
var notTrigger19 = document.getElementById('liveNotBtn19')
var notificationPlaceholder20 = document.getElementById('liveNotificationPlaceholder20')
var notTrigger20 = document.getElementById('liveNotBtn20')
var notificationPlaceholder21 = document.getElementById('liveNotificationPlaceholder21')
var notTrigger21 = document.getElementById('liveNotBtn21')
function toastshow() {
  $('.toast').toast('show');
}
function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, you triggered this alert message!', 'success')
  })
}

function notif() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<span class="badge bg-primary justify-content-center">Primary</span>'
  notificationPlaceholder.append(wrapper)
}

function notif2() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<span class="spinner-border"></span>'
  notificationPlaceholder2.append(wrapper)
}

function notif3() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<nav aria-label="breadcrumb" class="d-grid gap-2 col-6 mx-auto">' +'<ol class="breadcrumb">' + '<li class="breadcrumb-item">' + '<a href="#">Home</a></li>'+'<li class="breadcrumb-item">'+'<a href="#">Home</a></li>'+'<li class="breadcrumb-item"></li>'+'<a href="#">Library</a></li>'+'</ol>'+'</nav>'
  notificationPlaceholder3.append(wrapper)
}

function notif4() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<nav aria-label="Page navigation example">'+
  '<ul class="pagination">'+'<li class="page-item"><a class="page-link" href="#">Previous</a></li>'+'<li class="page-item"><a class="page-link" href="#">1</a></li>'+'<li class="page-item">'+'<a class="page-link" href="#">2</a>'+'</li>'+'<li class="page-item">'+'<a class="page-link" href="#">3</a></li>'+'<li class="page-item">'+'<a class="page-link" href="#">'+'Next'+'</a>'+'</li>'+'</ul>'+'</nav>'
  notificationPlaceholder4.append(wrapper)
}

function notif5() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="btn-group" role="group" aria-label="Basic example">'+'<button type="button" class="btn btn-secondary">'+'Left'+'</button>'+'<button type="button" class="btn btn-secondary">'+'Middle'+'</button>'+'  <button type="button" class="btn btn-secondary">'+'Right'+'</button>'+'</div>'
  notificationPlaceholder5.append(wrapper)
}
function notif6() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="card" style="width: 18rem;">'+'<img class="card-img-top" src="..." alt="Card image cap">'+'<div class="card-body">'+'<h5 class="card-title">'+'Card title'+'</h5>'+'<p class="card-text">'+'Some quick example text to build on the card title and make up the bulk of the cards content.'+'</p>'+'<a href="#" class="btn btn-primary">'+'Go somewhere'+'</a>'+'</div>'+'</div>'
  notificationPlaceholder6.append(wrapper)
}
function notif7() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">'+'<div class="carousel-inner">'+'<div class="carousel-item active">'+'<img class="d-block w-100" src="asserts/img/image.JPG" alt="First slide">'+'</div>'+'<div class="carousel-item">'+'<img class="d-block w-100" src="asserts/img/image2.JPG" alt="Second slide">'+  '</div>'+'<div class="carousel-item">'+'<img class="d-block w-100" src="asserts/img/image.JPG" alt="Third slide">'+'</div>'+'</div>'+'</div>'
  notificationPlaceholder7.append(wrapper)
}
function notif8() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<p>'+'<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">'+'Link with href'+'</a>'+'<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">'+'Button with data-target'+'</button>'+'</p>'+'<div class="collapse" id="collapseExample">'+'<div class="card card-body">'+'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'+'</div>'+'</div>'
  notificationPlaceholder8.append(wrapper)
}
function notif9() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="dropdown">'+'<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+'Dropdown button'+'</button>'+'<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'+'<a class="dropdown-item" href="#">Action</a>'+'<a class="dropdown-item" href="#">Another action</a>'+'<a class="dropdown-item" href="#">'+'Something else here'+'</a>'+'</div>'+'</div>'
  notificationPlaceholder9.append(wrapper)
}
function notif10() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<ul class="list-group">'+'<li class="list-group-item">'+'Cras justo odio'+'</li>'+'<li class="list-group-item">'+'Dapibus ac facilisis in'+'</li>'+'<li class="list-group-item">'+'Morbi leo risus'+'</li>'+'<li class="list-group-item">Porta ac consectetur ac</li>'+'<li class="list-group-item">Vestibulum at eros</li>'+'</ul>'
  notificationPlaceholder10.append(wrapper)
}
function notif11() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="modal" tabindex="-1" role="dialog">'+'<div class="modal-dialog" role="document">'+'<div class="modal-content">'+'<div class="modal-header">'+'<h5 class="modal-title">'+'Modal title'+'</h5>'+'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+'<span aria-hidden="true">&times;</span>'+'</button>'+'</div>'+'<div class="modal-body">'+'<p>Modal body text goes here.</p>'+'</div>'+'<div class="modal-footer">'+'<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+'<button type="button" class="btn btn-primary">Save changes</button>'+'</div>'+'</div>'+'</div>'+'</div>'
  notificationPlaceholder11.append(wrapper)
}
function notif12() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<ul class="nav">'+'<li class="nav-item">'+'<a class="nav-link active" href="#">Active</a>'+'</li>'+'<li class="nav-item">'+'<a class="nav-link" href="#">Link</a>'+'</li>'+'<li class="nav-item">'+'<a class="nav-link" href="#">Link</a>'+'</li>'+'<li class="nav-item">'+'<a class="nav-link disabled" href="#">Disabled</a>'+'</li>'+'</ul>'
  notificationPlaceholder12.append(wrapper)
}

function notif13() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<nav class="navbar navbar-light bg-light">'+'<a class="navbar-brand" href="#">Navbar</a>'+'</nav>'
  notificationPlaceholder13.append(wrapper)
}
function notif14() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">'+'<div class="offcanvas-header">'+'<h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>'+'<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">'+'</button>'+'</div>'+'<div class="offcanvas-body">Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.</div>'+'</div>'
  notificationPlaceholder14.append(wrapper)
}

function notif15() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<p aria-hidden="true">'+'<span class="placeholder col-6">'+'</span>'+'</p>'+'<a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-4" aria-hidden="true"></a>'
  notificationPlaceholder15.append(wrapper)
}

function notif16() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="progress">'+'<div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">'+'</div>'+'</div>'
  notificationPlaceholder16.append(wrapper)
}

function notif17() {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<nav id="navbar-example3" class="navbar navbar-light bg-light">'+'<a class="navbar-brand" href="#">Navbar</a>'+'<nav class="nav nav-pills flex-column">'+    '<a class="nav-link" href="#item-1">Item 1</a>'+'<nav class="nav nav-pills flex-column">'+'<a class="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>'+      '<a class="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>'+'</nav>'+'<a class="nav-link" href="#item-2">Item2</a>'+'<a class="nav-link" href="#item-3">Item3</a>'+'<nav class="nav nav-pills flex-column">'+'<a class="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>'+'<a class="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>'+'</nav>'+'</nav>'+'</nav>'+'<div class="progress">'+'<div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">'+'</div>'+'</div>'
  notificationPlaceholder17.append(wrapper)
}
function notif18() {
  toastshow()
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">'+'<div class="toast-header">'+'<img src="asserts/img/image5.png" class="rounded me-2" alt="...">'+'<strong class="me-auto">Bootstrap</strong>'+'<small>11 mins ago</small>'+'<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">'+'</button>'+'</div>'+'<div class="toast-body">'+'Hello, world! This is a toast message.'+'</div>'+'</div>'
  notificationPlaceholder18.append(wrapper)
}

function notif19() {

  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top"> Tooltip on top </button>'
  notificationPlaceholder19.append(wrapper)}

function notif20() {

  var wrapper = document.createElement('table')
  wrapper.innerHTML = '<tableclass="table">'+'<thead>'+'<tr>'+'<thscope="col">'+'#'+'</th>'+'</tr>'+'</thead>'+'<tbody>'+'<tr>'+'<thscope="row">'+'1'+'</th>'+'<td>'+'Mark'+'</td>'+'<td>'+'Otto'+'</td>'+'<td>'+'@mdo'+'</td>'+'</tr>'+'<tr>'+'<thscope="row">'+'2'+'</th>'+'<td>'+'Jacob'+'</td>'+'<td>'+'Thornton'+'</td>'+'<td>'+'@fat'+'</td>'+'</tr>'+'<tr>'+'<thscope="row">'+'3'+'</th>'+'</tr>'+'</tbody>'+'</table>'
  notificationPlaceholder20.append(wrapper)
}
function notif21(TestVar) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<p>"You typed:"' + TestVar + '</p>'
  notificationPlaceholder21.append(wrapper)
}

if (notTrigger) {
  notTrigger.addEventListener('click', function () {
    notif()
})}

if (notTrigger2) {
  notTrigger2.addEventListener('click', function () {
  notif2()
})}

if (notTrigger3) {
  notTrigger3.addEventListener('click', function () {
  notif3()
})}

if (notTrigger4) {
  notTrigger4.addEventListener('click', function () {
  notif4()
})}

if (notTrigger5) {
  notTrigger5.addEventListener('click', function () {
  notif5()
})}
if (notTrigger6) {
  notTrigger6.addEventListener('click', function () {
  notif6()
})}
if (notTrigger7) {
  notTrigger7.addEventListener('click', function () {
  notif7()
})}
if (notTrigger8) {
  notTrigger8.addEventListener('click', function () {
  notif8()
})}
if (notTrigger9) {
  notTrigger9.addEventListener('click', function () {
  notif9()
})}
if (notTrigger10) {
  notTrigger10.addEventListener('click', function () {
  notif10()
})}
if (notTrigger11) {
  notTrigger11.addEventListener('click', function () {
  notif11()
})}
if (notTrigger12) {
  notTrigger12.addEventListener('click', function () {
  notif12()
})}
if (notTrigger13) {
  notTrigger13.addEventListener('click', function () {
  notif13()
})}

if (notTrigger14) {
  notTrigger14.addEventListener('click', function () {
  notif14()
})}

if (notTrigger15) {
  notTrigger15.addEventListener('click', function () {
  notif15()
})}

if (notTrigger16) {
  notTrigger16.addEventListener('click', function () {
  notif16()
})}
if (notTrigger17) {
  notTrigger17.addEventListener('click', function () {
  notif17()
})}
if (notTrigger18) {
  notTrigger18.addEventListener('click', function () {
  notif18()
})}
if (notTrigger19) {
  notTrigger19.addEventListener('click', function () {
  notif19()
})}

if (notTrigger20) {
  notTrigger20.addEventListener('click', function () {
  notif20()
})}

function testResults (form) {
  var TestVar = form.inputbox.value;
  notif21 (TestVar);
}