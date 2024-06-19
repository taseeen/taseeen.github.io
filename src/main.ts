import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg') as HTMLCanvasElement});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(12, 1, 15, 100),
  new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
);
torus.rotation.x = 1;
torus.rotation.y = 5;
torus.rotation.z = 5;
scene.add(torus);

const torus2 = new THREE.Mesh(
  new THREE.TorusGeometry(12, 1, 15, 100),
  new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
);
torus2.rotation.x = -1;
torus2.rotation.y = -5;
torus2.rotation.z = -5;
scene.add(torus2);

const sphereGeometry = new THREE.SphereGeometry(7, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.005;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.005;

  torus2.rotation.x += 0.005;
  torus2.rotation.y += 0.005;
  torus2.rotation.z += 0.005;

  sphere.rotation.x += -0.0025;
  sphere.rotation.y += -0.0025;
  sphere.rotation.z += -0.0025;

  renderer.render(scene, camera);
}

animate();