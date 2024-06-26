import './style.css'
import { setupCounter } from './counter.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import image1 from './assets/images/img1.jpg'
document.querySelector('#app').innerHTML = `
  <div class="bg-white min-vh-100  ">
  <h2 class="fw-bold fs-30 text-center">My Vite Project</h2>
  <div class="container d-flex justify-content-center  py-100 gap-4">
  <div class="card d-flex justify-content-center align-items-center overflow-hidden">
    <img src="${image1}" alt="img1" class="w-100">
    <h3 class="fs-20">Tree</h3>
  </div>
  <div class="card d-flex justify-content-center align-items-center overflow-hidden">
  <img class="w-100" src="${image1}" alt="images1">
  <h3 class="fs-20">Tree</h3>
</div>
<div class="card d-flex justify-content-center align-items-center overflow-hidden" >
<img src="${image1}" alt="img1" class="w-100">
<h3 class="fs-20">Tree</h3>
</div>
</div>
  </div>
`

setupCounter(document.querySelector('#counter'))
