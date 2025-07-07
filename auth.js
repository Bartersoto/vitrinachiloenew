const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const profileForm = document.getElementById('profileForm');
const logoutBtn = document.getElementById('logoutBtn');

registerForm.addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPass').value;

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert('Registrado exitosamente');
    registerForm.reset();
  } catch (error) {
    alert(error.message);
  }
});

loginForm.addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPass').value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    alert('Inicio de sesión exitoso');
    loginForm.reset();
  } catch (error) {
    alert(error.message);
  }
});

logoutBtn.addEventListener('click', () => {
  auth.signOut();
});

// Detectar cambios en el estado de autenticación
auth.onAuthStateChanged(async user => {
  if (user) {
    // Mostrar perfil y logout, ocultar login y registro
    profileForm.style.display = 'block';
    logoutBtn.style.display = 'block';
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';

    // Cargar perfil del usuario si existe
    const doc = await db.collection('perfiles').doc(user.uid).get();
    if (doc.exists) {
      const data = doc.data();
      profileForm.nombre.value = data.nombre || '';
      profileForm.rubro.value = data.rubro || '';
      profileForm.descripcion.value = data.descripcion || '';
      profileForm.contacto.value = data.contacto || '';
    } else {
      profileForm.reset();
    }
  } else {
    // Mostrar login y registro, ocultar perfil y logout
    profileForm.style.display = 'none';
    logoutBtn.style.display = 'none';
    loginForm.style.display = 'block';
    registerForm.style.display = 'block';
  }
});

// Guardar perfil en Firestore
profileForm.addEventListener('submit', async e => {
  e.preventDefault();
  const user = auth.currentUser;
  if (!user) return alert('No estás autenticado');

  const nombre = profileForm.nombre.value;
  const rubro = profileForm.rubro.value;
  const descripcion = profileForm.descripcion.value;
  const contacto = profileForm.contacto.value;

  try {
    await db.collection('perfiles').doc(user.uid).set({
      nombre, rubro, descripcion, contacto
    });
    alert('Perfil guardado');
  } catch (error) {
    alert('Error guardando perfil: ' + error.message);
  }
});
