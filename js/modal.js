const modal = document.querySelector('#modal')
const modalContent = document.querySelector('#modal-content')

const showModal = () => modal.classList.remove('hidden')
const hideModal = () => modal.classList.add('hidden')

modal.addEventListener('click', evt => {
    if (modalContent.contains(evt.target)) {
        // in content, not the mask
        // thus do nothing
        return
    }

    // or close the modal
    hideModal()
})

export default {
    showModal,
    hideModal
}