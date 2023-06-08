function showModal(e) {
    const imageId = e.id;
    const modal = document.getElementById('idmodal');
    const img = modal.querySelector('img');
    img.src = `./${imageId}.jpg`
    modal.classList.add('modal--active');
    document.body.style.overflowY = 'hidden'

}
function closeModal() {
    const modal = document.getElementById('idmodal');
    modal.classList.remove('modal--active');
    document.body.style.overflowY = 'auto'
} 

