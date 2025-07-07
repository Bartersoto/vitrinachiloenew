const form = document.getElementById('profileForm');
const container = document.getElementById('perfilesContainer');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const rubro = document.getElementById('rubro').value;
  const descripcion = document.getElementById('descripcion').value;
  const contacto = document.getElementById('contacto').value;

  await db.collection('perfiles').add({ nombre, rubro, descripcion, contacto });

  form.reset();
  cargarPerfiles();
});

async function cargarPerfiles() {
  container.innerHTML = '';
  const snapshot = await db.collection('perfiles').get();
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement('div');
    div.classList.add('perfil');
    div.innerHTML = `
      <h3>${data.nombre}</h3>
      <strong>${data.rubro}</strong>
      <p>${data.descripcion}</p>
      <p><em>Contacto: ${data.contacto}</em></p>
    `;
    container.appendChild(div);
  });
}

cargarPerfiles();
